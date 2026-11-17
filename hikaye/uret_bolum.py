"""Bölümü baştan sona üretir:  python uret_bolum.py ep2 [--onizle 3,10,20]
 tts_brian -> assemble -> mix_ep -> 4 paralel render -> birleştir+ses -> IG için yeniden kodla -> ../../Karar-Sende-Otomasyon/medya/bNN.mp4
--onizle verilirse sadece o saniyelerden kare üretir (render etmez)."""
import sys, os, json, subprocess, math
H = os.path.dirname(os.path.abspath(__file__)); ep = sys.argv[1]; D = os.path.join(H, ep)
FF = r"C:\Users\MSI\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"
env = {**os.environ, "EP": ep, "PYTHONIOENCODING": "utf-8"}
def run(*a, **k):
    r = subprocess.run(a, cwd=H, env=env, **k)
    if r.returncode: sys.exit(f"HATA: {' '.join(a)[:80]}")
cfg = json.load(open(os.path.join(D, "script.json"), encoding="utf-8")); n = cfg["episode"]
if "--onizle" in sys.argv:
    run(sys.executable, "assemble.py", ep); run(sys.executable, "render2.py", "frames", sys.argv[sys.argv.index("--onizle") + 1]); sys.exit()
run(sys.executable, "tts_brian.py", ep); run(sys.executable, "assemble.py", ep); run(sys.executable, "mix_ep.py", ep)
tot = json.load(open(os.path.join(D, "timeline.json"), encoding="utf-8"))["total"]; frames = int(tot * 30) + 3; per = math.ceil(frames / 4)
os.makedirs(os.path.join(D, "seg"), exist_ok=True)
ps = [subprocess.Popen([sys.executable, "render2.py", "seg", str(i * per), str(min(frames, (i + 1) * per)), os.path.join(D, "seg", f"p{i}.mp4")], cwd=H, env=env) for i in range(4)]
[p.wait() for p in ps]
open(os.path.join(D, "list.txt"), "w").write("".join(f"file 'seg/p{i}.mp4'\n" for i in range(4)))
full = os.path.join(D, "final.mp4")
run(FF, "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", os.path.join(D, "list.txt"), "-i", os.path.join(D, "ses_final.wav"), "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k", "-shortest", full)
media = os.path.abspath(os.path.join(H, "..", "..", "Karar-Sende-Otomasyon", "medya")); os.makedirs(media, exist_ok=True)
out = os.path.join(media, f"b{n:02d}.mp4")
run(FF, "-y", "-loglevel", "error", "-i", full, "-c:v", "libx264", "-profile:v", "high", "-pix_fmt", "yuv420p", "-r", "30", "-b:v", "2200k", "-maxrate", "3000k", "-bufsize", "5000k", "-c:a", "aac", "-ar", "44100", "-ac", "2", "-b:a", "128k", "-movflags", "+faststart", out)
print("HAZIR:", out, round(os.path.getsize(out) / 1e6, 1), "MB")
