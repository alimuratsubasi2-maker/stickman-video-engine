"""Çöpadam Nişi — ses efektleri (diyalogsuz). python sfx.py -> ses/ses1..4.wav"""
import numpy as np, os
from scipy.io import wavfile
from scipy.signal import butter, lfilter
SR = 44100
HERE = os.path.dirname(os.path.abspath(__file__))
rng = np.random.default_rng(7)

def T(d): return np.arange(int(SR * d)) / SR
def env(n, a=.005, r=.1):
    e = np.ones(n); na = max(1, int(a * SR)); nr = max(1, int(r * SR))
    e[:na] = np.linspace(0, 1, na); e[-nr:] *= np.linspace(1, 0, nr); return e
def lp(x, f): b, a = butter(2, f / (SR / 2), 'low'); return lfilter(b, a, x)
def hp(x, f): b, a = butter(2, f / (SR / 2), 'high'); return lfilter(b, a, x)
def bp(x, f1, f2): b, a = butter(2, [f1 / (SR / 2), f2 / (SR / 2)], 'band'); return lfilter(b, a, x)
def sweep(f0, f1, d, wave='sin', vib=0):
    t = T(d); f = np.linspace(f0, f1, len(t)) * (1 + vib * np.sin(2 * np.pi * 6 * t))
    ph = 2 * np.pi * np.cumsum(f) / SR
    if wave == 'sin': return np.sin(ph)
    if wave == 'saw': return 2 * ((ph / (2 * np.pi)) % 1) - 1
    return np.sign(np.sin(ph))
def decay(x, k): return x * np.exp(-np.arange(len(x)) / SR * k)

def thud(v=1): d = .3; x = decay(sweep(120, 38, d), 14) + .5 * decay(lp(rng.normal(size=int(SR * d)), 500), 30); return v * x
def step(v=.5): d = .12; return v * (decay(sweep(90, 50, d), 35) + .3 * decay(lp(rng.normal(size=int(SR * d)), 800), 50))
def whoosh(d=.45, v=.5): n = int(SR * d); x = bp(rng.normal(size=n), 400, 3500); return v * x * np.sin(np.linspace(0, np.pi, n)) ** 1.5
def boing(f=420, d=.45, v=.6): return v * decay(sweep(f, f * .55, d, vib=.06), 6) * env(int(SR * d), .003, .05)
def pop(v=.7): d = .1; return v * decay(sweep(900, 220, d), 30)
def bip(f=1800, d=.07, v=.35): return v * sweep(f, f, d, 'sq') * env(int(SR * d), .002, .01)
def ding(f=1318, v=.5): d = 1.1; x = sweep(f, f, d) + .4 * sweep(f * 2.01, f * 2.01, d) + .2 * sweep(f * 3, f * 3, d); return v * decay(x, 4)
def sad(v=.55):
    out = []
    for f, d in [(247, .38), (233, .38), (220, .38), (196, 1.0)]:
        x = lp(sweep(f, f * (.97 if d > .9 else 1), d, 'saw', vib=.012 if d > .9 else 0), 1400) * env(int(SR * d), .02, .08); out.append(x)
    return v * np.concatenate(out)
def cricket(v=.18):
    out = []
    for _ in range(5):
        d = .05; out += [sweep(4300, 4300, d) * env(int(SR * d), .005, .01), np.zeros(int(SR * .04))]
    return v * np.concatenate(out)
def grunt(v=.5, d=.4): return v * lp(sweep(100, 70, d, 'saw', vib=.03), 600) * env(int(SR * d), .03, .12)
def snore(v=.5, d=1.3):
    n = int(SR * d); x = lp(rng.normal(size=n), 900) * (1 + .8 * np.sin(2 * np.pi * 28 * T(d)))
    return v * x * np.sin(np.linspace(0, np.pi, n)) ** 1.2
def creak(v=.35, d=.7): return v * lp(sweep(180, 380, d, 'saw', vib=.08), 1200) * env(int(SR * d), .05, .15)
def twang(v=.5): d = .35; return v * decay(sweep(900, 140, d, vib=.15), 9) * env(int(SR * d), .002, .05)
def crack(v=.6): d = .18; return v * decay(hp(rng.normal(size=int(SR * d)), 1500), 25)
def smack(v=.7): d = .15; return v * (decay(lp(rng.normal(size=int(SR * d)), 2500), 35) + decay(sweep(200, 80, d), 30))
def jingle(v=.45):
    out = []
    for f in [523, 659, 784, 1047, 1319]: d = .09; out.append(sweep(f, f, d, 'sq') * env(int(SR * d), .002, .02))
    out.append(sweep(1568, 1568, .35, 'sq') * env(int(SR * .35), .002, .25))
    return v * np.concatenate(out)
def scratch(v=.2, d=.5): n = int(SR * d); return v * bp(rng.normal(size=n), 2500, 6000) * (np.sin(2 * np.pi * 9 * T(d)) > 0) * env(n, .01, .05)
def dun(v=.6): return v * decay(sweep(70, 60, .5), 7) * env(int(SR * .5), .004, .1)
def click(v=.6): d = .03; return v * decay(hp(rng.normal(size=int(SR * d)), 1500), 120)
def rustle(v=.25, d=.4): n = int(SR * d); return v * bp(rng.normal(size=n), 1500, 7000) * (rng.random(n // 400 + 1).repeat(400)[:n]) * env(n, .01, .1)
def charge(v=.3, f=600): d = .18; return v * (sweep(f, f * 1.5, d) * env(int(SR * d), .005, .06))
def blip(v=.25): d = .06; return v * decay(sweep(1200, 600, d), 40)

def mix(cues, name):
    out = np.zeros(int(SR * 10.0))
    for t, s in cues:
        i = int(t * SR); n = min(len(s), len(out) - i)
        if n > 0: out[i:i + n] += s[:n]
    out /= max(1e-6, np.abs(out).max()) / .85
    os.makedirs(os.path.join(HERE, 'ses'), exist_ok=True)
    wavfile.write(os.path.join(HERE, 'ses', name), SR, (out * 32767).astype(np.int16))

# 1 · Büyük Kutu
c = [(t, step(.3)) for t in np.arange(.1, 1.5, .25)] + [(1.52, thud(1.0)), (1.55, whoosh(.25, .25))]
c += [(t, step(.3)) for t in np.arange(1.9, 2.7, .3)] + [(t, step(.25)) for t in np.arange(1.7, 3.0, .28)]
c += [(4.35, grunt()), (4.8, grunt(.55, .45)), (5.2, whoosh(.5, .6)), (5.28, boing(520, .3, .4)), (5.9, thud(.8))]
c += [(6.3, boing(380, .5)), (6.75, boing(500, .35, .45)), (7.05, boing(620, .25, .3)), (7.15, rustle(.3, .5)), (8.3, pop()), (8.6, sad()), (9.5, cricket())]
mix(c, 'ses1.wav')
# 2 · Kopya
c = [(t, scratch(.2, .4)) for t in (.2, .8, 1.4, 2.0)] + [(1.0 + .0, scratch(.15, .3))]
c += [(2.35, dun(.4)), (2.7, whoosh(.25, .3)), (4.2, whoosh(.25, .3)), (4.6, whoosh(.25, .3)), (5.75, dun(.6)), (5.95, dun(.7)), (6.55, whoosh(.35, .45)), (6.7, rustle(.35, .3)), (7.7, blip()), (8.0, cricket()), (8.5, boing(330, .5, .35))]
mix(c, 'ses2.wav')
# 3 · Şarj Kablosu
c = [(.15, bip(1600)), (.4, bip(1600)), (.65, bip(1600))] + [(t, step(.3)) for t in np.arange(.8, 2.0, .2)]
c += [(2.3, click()), (2.35, charge(.35)), (3.2, charge(.2, 500))]
c += [(t, charge(.12, 500 + 12 * t)) for t in np.arange(4.0, 7.0, 1.0)]
c += [(7.0, ding()), (7.45, step(.3))] + [(t, step(.3)) for t in np.arange(7.6, 8.25, .22)]
c += [(8.22, twang()), (8.45, smack()), (8.48, crack()), (9.0, sad(.45))]
mix(c, 'ses3.wav')
# 4 · Uyku Taklidi
c = [(.2, bip(900, .06, .2)), (.7, bip(1100, .06, .2)), (1.0, bip(1300, .06, .2)), (1.6, bip(900, .06, .2)), (2.1, bip(1200, .06, .2)), (2.6, bip(1000, .06, .2))]
c += [(3.0, creak()), (3.55, rustle(.3, .4)), (3.8, whoosh(.3, .25))]
c += [(t, step(.5)) for t in np.arange(3.6, 6.0, .42)] + [(4.7, snore(.45)), (6.2, snore(.5)), (7.7, snore(.25, 1.0))]
c += [(7.2, jingle()), (8.45, whoosh(.4, .3)), (8.9, dun(.5)), (9.4, cricket(.15))]
mix(c, 'ses4.wav')
print('ok')
