"""Genel bölüm sesi: python mix_ep.py ep2  -> ep2/ses_final.wav  (anlatım + drone/pad + script.json 'sfx' listesi)"""
import sys, os, json
import numpy as np
from scipy.io import wavfile
H = os.path.dirname(os.path.abspath(__file__)); sys.path.insert(0, os.path.join(H, ".."))
import sfx
from sfx import SR, sweep, lp, bp, decay, env, T, rng
ep = sys.argv[1]; D = os.path.join(H, ep)
cfg = json.load(open(os.path.join(D, "script.json"), encoding="utf-8")); tl = json.load(open(os.path.join(D, "timeline.json"), encoding="utf-8"))
S, TOT = tl["sent"], tl["total"]; N = int(SR * TOT)
sr0, nar = wavfile.read(os.path.join(D, "narration.wav")); assert sr0 == SR
nar = nar.astype(np.float64) / 32768; nar = np.pad(nar, (0, max(0, N - len(nar))))[:N]
def place(buf, t, sig, v=1.0):
    i = int(t * SR)
    if 0 <= i < len(buf): n = min(len(sig), len(buf) - i); buf[i:i + n] += sig[:n] * v
t = T(TOT)
drone = lp(sweep(55, 55, TOT, 'saw'), 220) * (.7 + .3 * np.sin(2 * np.pi * .13 * t)) + .5 * lp(sweep(82.4, 82.4, TOT, 'saw'), 260)
pad = sum(np.sin(2 * np.pi * f * t + i) * (.6 + .4 * np.sin(2 * np.pi * (.07 + .02 * i) * t)) for i, f in enumerate([110, 164.8, 220, 261.6, 329.6]))
amb = (.10 * drone + .035 * pad) * np.minimum(1, np.minimum(t / 2.5, (TOT - t) / 2.5))
fx = np.zeros(N)
MAKE = {"thud": lambda c: sfx.thud(c.get("v", 1)), "whoosh": lambda c: sfx.whoosh(c.get("d", 1.2), c.get("v", .4)), "ding": lambda c: sfx.ding(c.get("f", 1318), c.get("v", .4)),
        "pop": lambda c: sfx.pop(c.get("v", .5)), "step": lambda c: sfx.step(c.get("v", .4)), "rustle": lambda c: sfx.rustle(c.get("v", .3), .4), "scratch": lambda c: sfx.scratch(c.get("v", .3), .5),
        "creak": lambda c: sfx.creak(c.get("v", .3), .6), "blip": lambda c: sfx.blip(c.get("v", .3)), "dun": lambda c: sfx.dun(c.get("v", .6)), "sad": lambda c: sfx.sad(c.get("v", .5)),
        "cricket": lambda c: sfx.cricket(c.get("v", .2)), "jingle": lambda c: sfx.jingle(c.get("v", .4)), "boing": lambda c: sfx.boing(c.get("f", 420), .45, c.get("v", .5)),
        "noise": lambda c: bp(rng.normal(size=int(SR * c.get("dur", 2))), c.get("lo", 600), c.get("hi", 3000)) * (rng.random(int(SR * c.get("dur", 2)) // 900 + 1).repeat(900)[:int(SR * c.get("dur", 2))]) * c.get("v", .15)}
for c in cfg.get("sfx", []):
    if c["t"] not in MAKE: continue
    if "w" in c: si, rx = c["w"]; tt = next((w[1] for w in S[si]["words"] if rx in w[0]), S[si]["start"]) - .05
    elif c.get("at") == "end": tt = TOT - 1.9
    else: tt = S[c["s"]]["start"] + c.get("o", 0)
    place(fx, tt, MAKE[c["t"]](c))
sm = np.convolve(np.abs(nar), np.ones(int(SR * .12)) / int(SR * .12), 'same'); duck = 1 - .45 * np.clip(sm * 6, 0, 1)
mix = nar + (amb + fx * .55) * duck; mix /= np.abs(mix).max() / .9
wavfile.write(os.path.join(D, "ses_final.wav"), SR, (mix * 32767).astype(np.int16)); print("ses tamam", round(TOT, 1))
