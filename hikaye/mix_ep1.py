"""Bölüm 1 sesi: Brian anlatımı + drone/pad + SFX -> ep1/ses_final.wav"""
import sys, os, json
import numpy as np
from scipy.io import wavfile
H = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(H, ".."))
import sfx
from sfx import SR, sweep, lp, bp, decay, env, T, rng
D = os.path.join(H, "ep1")
tl = json.load(open(os.path.join(D, "timeline.json"), encoding="utf-8"))
S, TOT, G = tl["sent"], tl["total"], tl["groups"]
N = int(SR * TOT)
sr0, nar = wavfile.read(os.path.join(D, "narration.wav")); assert sr0 == SR
nar = nar.astype(np.float64) / 32768; nar = np.pad(nar, (0, max(0, N - len(nar))))[:N]
def place(buf, t, sig, v=1.0):
    i = int(t * SR)
    if 0 <= i < len(buf): n = min(len(sig), len(buf) - i); buf[i:i + n] += sig[:n] * v
st = lambda i: S[i]["start"] - .3
SC = [(0 if k == 0 else st(g[0]), st(G[k + 1][0]) if k + 1 < len(G) else TOT) for k, g in enumerate(G)]
word = lambda si, rx: next((w[1] for w in S[si]["words"] if rx in w[0]), S[si]["start"])
t = T(TOT)
drone = lp(sweep(55, 55, TOT, 'saw'), 220) * (.7 + .3 * np.sin(2 * np.pi * .13 * t)) + .5 * lp(sweep(82.4, 82.4, TOT, 'saw'), 260)
pad = sum(np.sin(2 * np.pi * f * t + i) * (.6 + .4 * np.sin(2 * np.pi * (.07 + .02 * i) * t)) for i, f in enumerate([110, 164.8, 220, 261.6, 329.6]))
amb = (.10 * drone + .035 * pad) * np.minimum(1, np.minimum(t / 2.5, (TOT - t) / 2.5))
fx = np.zeros(N)
place(fx, 2.4, sfx.whoosh(3.6, .35)); place(fx, 3.3, sfx.thud(.8)); place(fx, 4.6, sfx.thud(.5))                     # A
b0, b1 = SC[1]; place(fx, b0, bp(rng.normal(size=int(SR * (b1 - b0))), 350, 1800) * (.6 + .4 * np.sin(2 * np.pi * 1.7 * T(b1 - b0))), .16)
for dt in (1.0, 2.2, 3.6): place(fx, b0 + dt, .3 * (sweep(420, 420, .35, 'sq') + sweep(520, 520, .35, 'sq')) * env(int(SR * .35), .01, .08))
c0 = SC[2][0]; place(fx, c0 + .1, lp(sweep(95, 60, 1.8, 'saw', vib=.02), 500) * env(int(SR * 1.8), .1, .5), .5)    # C
place(fx, word(3, "Yirmi") - .1, sfx.ding(1100, .35)); place(fx, word(3, "temsilci") - .1, sfx.ding(1480, .35))
d0 = SC[3][0]
for dt in (.8, 2.2, 3.6): place(fx, d0 + dt, sfx.thud(.55)); place(fx, d0 + dt + .15, sfx.scratch(.25, .5))
k0, k1 = SC[4]                                                                                                       # saat
for q in np.arange(0, k1 - k0, .5): place(fx, k0 + q, .5 * decay(sweep(1800, 1500, .05), 60))
place(fx, k0, lp(sweep(80, 200, k1 - k0, 'saw'), 700) * env(int(SR * (k1 - k0)), .5, .3), .25)
h0, h1 = SC[5]                                                                                                       # Hasan
place(fx, h0, bp(rng.normal(size=int(SR * (h1 - h0))), 600, 3000) * (rng.random(int(SR * (h1 - h0)) // 900 + 1).repeat(900)[:int(SR * (h1 - h0))]), .12)
place(fx, S[6]["start"] + 4.6, sfx.scratch(.4, .6)); place(fx, word(6, "kaşıyor") if False else S[6]["start"] + 5.6, sfx.blip(.3))
place(fx, word(7, "A,") - .05, sfx.pop(.5)); place(fx, word(7, "B,") - .05, sfx.pop(.5)); place(fx, TOT - 1.9, sfx.ding(1046, .35))
env_n = np.abs(nar); k = int(SR * .12); sm = np.convolve(env_n, np.ones(k) / k, 'same'); duck = 1 - .45 * np.clip(sm * 6, 0, 1)
mix = nar + (amb + fx * .55) * duck
mix /= np.abs(mix).max() / .9
wavfile.write(os.path.join(D, "ses_final.wav"), SR, (mix * 32767).astype(np.int16)); print("ok", round(TOT, 1))
