"""python render2.py frames t1,t2,...   |   python render2.py seg <ilk_kare> <son_kare> <cikis.mp4>"""
import sys, os, json, base64, subprocess
from playwright.sync_api import sync_playwright
HERE = os.path.dirname(os.path.abspath(__file__))
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
FFMPEG = r"C:\Users\MSI\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"
FPS = 30
EP = os.environ.get("EP")
tl = json.load(open(os.path.join(HERE, EP, "timeline.json") if EP else os.path.join(HERE, "timeline.json"), encoding="utf-8"))

def grab(pg, t):
    d = pg.evaluate(f"draw(0,{t}); document.getElementById('c').toDataURL('image/png')")
    return base64.b64decode(d.split(",", 1)[1])

with sync_playwright() as p:
    b = p.chromium.launch(executable_path=CHROME)
    pg = b.new_page(viewport={"width": 1080, "height": 1920})
    pg.on("pageerror", lambda e: print("JS HATA:", e))
    pg.goto("file:///" + os.path.join(HERE, ("engine_" + EP + ".html") if EP else "engine2.html").replace("\\", "/"))
    pg.evaluate("setup(%s)" % json.dumps(tl))
    if sys.argv[1] == "frames":
        os.makedirs(os.path.join(HERE, "onizleme"), exist_ok=True)
        for t in [float(x) for x in sys.argv[2].split(",")]:
            open(os.path.join(HERE, "onizleme", f"h_{t:06.2f}.png"), "wb").write(grab(pg, t))
    else:
        a, z, out = int(sys.argv[2]), int(sys.argv[3]), sys.argv[4]
        pr = subprocess.Popen([FFMPEG, "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(FPS), "-i", "-",
                               "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "18", "-preset", "fast", out], stdin=subprocess.PIPE)
        for n in range(a, z):
            pr.stdin.write(grab(pg, n / FPS))
        pr.stdin.close(); pr.wait()
    b.close()
