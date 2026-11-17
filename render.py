"""Çöpadam Nişi — render. Kullanım:
  python render.py <sahne_no> frames 0,1.5,3     -> onizleme/ içine PNG kareler
  python render.py <sahne_no> video <cikis.mp4> [ses.wav]
"""
import sys, base64, subprocess, os
from playwright.sync_api import sync_playwright

HERE = os.path.dirname(os.path.abspath(__file__))
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
FFMPEG = r"C:\Users\MSI\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"
FPS, DUR = 30, 10.0

def grab(pg, i, t):
    d = pg.evaluate(f"draw({i},{t}); document.getElementById('c').toDataURL('image/png')")
    return base64.b64decode(d.split(",", 1)[1])

def main():
    idx = int(sys.argv[1]) - 1
    mode = sys.argv[2]
    with sync_playwright() as p:
        b = p.chromium.launch(executable_path=CHROME)
        pg = b.new_page(viewport={"width": 1080, "height": 1920})
        pg.goto("file:///" + os.path.join(HERE, "engine.html").replace("\\", "/"))
        if mode == "frames":
            os.makedirs(os.path.join(HERE, "onizleme"), exist_ok=True)
            for t in [float(x) for x in sys.argv[3].split(",")]:
                open(os.path.join(HERE, "onizleme", f"s{idx+1}_{t:05.2f}.png"), "wb").write(grab(pg, idx, t))
        else:
            out = sys.argv[3]; wav = sys.argv[4] if len(sys.argv) > 4 else None
            cmd = [FFMPEG, "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(FPS), "-i", "-"]
            if wav: cmd += ["-i", wav]
            cmd += ["-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "17", "-preset", "medium"]
            if wav: cmd += ["-c:a", "aac", "-b:a", "192k", "-shortest"]
            cmd += [out]
            pr = subprocess.Popen(cmd, stdin=subprocess.PIPE)
            for n in range(int(FPS * DUR)):
                pr.stdin.write(grab(pg, idx, n / FPS))
            pr.stdin.close(); pr.wait()
        b.close()

main()
