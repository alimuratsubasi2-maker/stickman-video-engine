"""Anlatım + ambiyans + SFX -> ses_final.wav"""
import sys, os, json, subprocess
import numpy as np
from scipy.io import wavfile
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
import sfx
from sfx import SR, sweep, lp, bp, decay, env, T, rng

HERE = os.path.dirname(os.path.abspath(__file__))
FF = r"C:\Users\MSI\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"
tl = json.load(open(os.path.join(HERE, "timeline.json"), encoding="utf-8"))
S = tl["sent"]; TOT = tl["total"]
N = int(SR * TOT)

def place(buf, t, sig, v=1.0):
    i = int(t * SR)
    if i < 0 or i >= len(buf): return
    n = min(len(sig), len(buf) - i); buf[i:i + n] += sig[:n] * v

def dec(mp3):
    raw = subprocess.check_output([FF, "-loglevel", "error", "-i", mp3, "-f", "f32le", "-ac", "1", "-ar", str(SR), "-"])
    return np.frombuffer(raw, dtype=np.float32).copy()

# --- anlatım
nar = np.zeros(N)
for s in S:
    x = dec(s["mp3"]); place(nar, s["start"], x)
nar /= max(1e-6, np.abs(nar).max())

# --- sahne başlangıçları (story.js ile aynı)
st = lambda i: S[i]["start"] - .3
groups = [[0, 1], [2], [3], [4], [5], [6, 7], [8, 9], [10], [11]]
SC = [(0 if k == 0 else st(g[0]), st(groups[k + 1][0]) if k + 1 < len(groups) else TOT) for k, g in enumerate(groups)]
word = lambda si, rx: next((w[1] for w in S[si]["words"] if rx in w[0]), S[si]["start"])

# --- ambiyans: drone + pad
t = T(TOT)
drone = lp(sweep(55, 55, TOT, 'saw'), 220) * (.7 + .3 * np.sin(2 * np.pi * .13 * t)) + .5 * lp(sweep(82.4, 82.4, TOT, 'saw'), 260)
pad = sum(np.sin(2 * np.pi * f * t + i) * (.6 + .4 * np.sin(2 * np.pi * (.07 + .02 * i) * t)) for i, f in enumerate([110, 164.8, 220, 261.6, 329.6]))
amb = (.10 * drone + .035 * pad) * np.minimum(1, np.minimum(t / 2.5, (TOT - t) / 2.5))
fx = np.zeros(N)

a0 = SC[0][0]
place(fx, 2.4, sfx.whoosh(3.6, .35)); place(fx, 3.3, sfx.thud(.8)); place(fx, 4.6, sfx.thud(.5))
b0 = SC[1][0]  # panik
crowd = bp(rng.normal(size=int(SR * (SC[1][1] - b0))), 350, 1800) * (.6 + .4 * np.sin(2 * np.pi * 1.7 * T(SC[1][1] - b0)))
place(fx, b0, crowd, .16)
for dt in (1.0, 2.6, 4.4):
    place(fx, b0 + dt, .3 * (sweep(420, 420, .35, 'sq') + sweep(520, 520, .35, 'sq')) * env(int(SR * .35), .01, .08))
c0 = SC[2][0]
place(fx, c0 + .1, lp(sweep(95, 60, 1.8, 'saw', vib=.02), 500) * env(int(SR * 1.8), .1, .5), .5)
place(fx, word(3, "Yirmi") - .1, sfx.ding(1100, .35)); place(fx, word(3, "temsilci") - .1, sfx.ding(1480, .35))
d0 = SC[3][0]
for dt in (.8, 2.4, 3.9, 5.5): place(fx, d0 + dt, sfx.thud(.55)); place(fx, d0 + dt + .15, sfx.scratch(.25, .5))
place(fx, d0, bp(rng.normal(size=int(SR * (SC[3][1] - d0))), 250, 1500) * (rng.random(int(SR * (SC[3][1] - d0)) // 3000 + 1).repeat(3000)[:int(SR * (SC[3][1] - d0))]), .12)
e0 = SC[4][0]
for k in range(3):
    d = k * 1.3
    for a in (2.9, 3.15, 3.4): place(fx, e0 + a + d + .3, 0.55 * decay(sweep(240, 110, .09), 40))
    place(fx, e0 + 3.9 + d + .3, sfx.creak(.3, .6)); place(fx, e0 + 4.5 + d + .3, sfx.pop(.4))
    for q in np.arange(.5, 2.7, .3): place(fx, e0 + d + .3 + q * 1.0, sfx.step(.12))
f0 = S[6]["start"]
place(fx, f0, .3 * lp(sweep(180, 1000, 1.4, vib=.08), 3000) * env(int(SR * 1.4), .05, .5))
for q in np.arange(2.6, 3.8, .35): place(fx, f0 + q, sfx.step(.3))
for q in np.arange(5.3, 5.9, .35): place(fx, f0 + q, sfx.step(.3))
place(fx, f0 + 6.0, .3 * lp(sweep(1000, 180, 1.2, vib=.08), 3000) * env(int(SR * 1.2), .05, .5))
place(fx, S[7]["start"] - .1, sfx.rustle(.3, .4)); place(fx, S[7]["start"] + .2, sfx.ding(1318, .4))
g0 = SC[6][0]
place(fx, g0, sfx.whoosh(2.4, .55)); place(fx, g0 + .5, sfx.whoosh(2.2, .4))
place(fx, S[9]["start"] - .2, sfx.ding(1568, .25))
h0 = SC[7][0]
for q in np.arange(.2, SC[7][1] - h0 - .5, .5): place(fx, h0 + q, sfx.step(.25))
place(fx, SC[7][1] - 1.1, sfx.thud(.6))
place(fx, word(11, "A,") - .05, sfx.pop(.5)); place(fx, word(11, "B,") - .05, sfx.pop(.5)); place(fx, TOT - 1.9, sfx.ding(1046, .35))

mix = nar * 1.0 + amb * 1.0 + fx * 0.55
# basit ducking: anlatım varken efekt/ambiyansı kıs
env_n = np.abs(nar); k = int(SR * .12); sm = np.convolve(env_n, np.ones(k) / k, 'same'); duck = 1 - .45 * np.clip(sm * 6, 0, 1)
mix = nar + (amb + fx * .55) * duck
mix /= np.abs(mix).max() / .9
wavfile.write(os.path.join(HERE, "ses_final.wav"), SR, (mix * 32767).astype(np.int16))
print("ok", round(TOT, 1))
