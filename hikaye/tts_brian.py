"""Bölüm anlatımı — Tekno Arşiv sesi (Brian). python tts_brian.py ep1
Grup grup sentezler (kısa cümleler yapıştırılır), kelime zamanlarını cümle/token'a dağıtır -> <ep>/timeline.json + narration.wav"""
import sys, os, json, re, asyncio, subprocess
import numpy as np
from scipy.io import wavfile
sys.path.insert(0, r"C:\Users\MSI\Desktop\YAPAY ZEKA PROJELER\OpenMontage")
from psikoloji_reels import avastfix  # noqa
import edge_tts

HERE = os.path.dirname(os.path.abspath(__file__))
FF = r"C:\Users\MSI\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin"
VOICE, RATE, SR, GAP = "en-US-BrianMultilingualNeural", "+0%", 44100, 0.45

def glue(text, min_words=9):
    ends = [i for i, ch in enumerate(text) if ch == "." and (i + 1 == len(text) or text[i + 1] == " ")]
    starts = [0] + [e + 2 for e in ends]
    t = list(text)
    last = ends[-1] if ends and ends[-1] >= len(text) - 1 else None
    for n, e in enumerate(ends):
        if e == last: continue
        cur = len(text[starts[n]:e].split())
        nxt_end = ends[n + 1] if n + 1 < len(ends) else len(text)
        nxt = len(text[e + 2:nxt_end].split())
        if cur < min_words or nxt < min_words: t[e] = ","
    return "".join(t)

async def synth(spoken, mp3):
    words = []
    com = edge_tts.Communicate(spoken, VOICE, rate=RATE, boundary="WordBoundary")
    with open(mp3, "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio": f.write(ch["data"])
            elif ch["type"] == "WordBoundary": words.append((ch["text"], ch["offset"] / 1e7, (ch["offset"] + ch["duration"]) / 1e7))
    return words

def dec(mp3):
    raw = subprocess.check_output([FF + r"\ffmpeg.exe", "-loglevel", "error", "-i", mp3, "-f", "f32le", "-ac", "1", "-ar", str(SR), "-"])
    return np.frombuffer(raw, dtype=np.float32).copy()

async def main(ep):
    d = os.path.join(HERE, ep); cfg = json.load(open(os.path.join(d, "script.json"), encoding="utf-8"))
    SENT, GROUPS = cfg["sent"], cfg["groups"]
    os.makedirs(os.path.join(d, "tts"), exist_ok=True)
    nar = np.zeros(int(SR * 400)); t0 = 0.6; out = [None] * len(SENT); end_t = 0
    for gi, g in enumerate(GROUPS):
        text = " ".join(SENT[i] for i in g); spoken = glue(text)
        mp3 = os.path.join(d, "tts", f"g{gi:02d}.mp3")
        words = await synth(spoken, mp3)
        spans, pos = [], 0
        for i in g: spans.append((i, pos, pos + len(SENT[i]))); pos += len(SENT[i]) + 1
        low, cur, got = spoken.lower(), 0, {i: {} for i in g}
        for w, a, b in words:
            p = low.find(w.lower(), cur)
            if p < 0: p = cur
            cur = p + max(1, len(w))
            for i, s0, s1 in spans:
                if s0 <= p < s1 + 1:
                    tk = [(m.start() + s0, m.end() + s0) for m in re.finditer(r"\S+", SENT[i])]
                    ti = next((k for k, (x, y) in enumerate(tk) if x <= p < y), len(tk) - 1)
                    e = got[i].setdefault(ti, [None, t0 + a, t0 + b]); e[2] = t0 + b; break
        for i in g:
            toks = SENT[i].split()
            ws = [[toks[k], got[i][k][1], got[i][k][2]] for k in sorted(got[i]) if k < len(toks)]
            out[i] = {"i": i, "text": SENT[i], "start": ws[0][1], "dur": ws[-1][2] - ws[0][1], "words": ws}
        x = dec(mp3); n = len(x); nar[int(t0 * SR):int(t0 * SR) + n] += x
        end_t = t0 + n / SR; t0 = end_t + GAP
    total = end_t + cfg.get("tail", 2.2)
    nar = nar[:int(total * SR)]; nar /= max(1e-6, np.abs(nar).max()) / .95
    wavfile.write(os.path.join(d, "narration.wav"), SR, (nar * 32767).astype(np.int16))
    json.dump({"sent": out, "total": total, "groups": GROUPS}, open(os.path.join(d, "timeline.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("toplam", round(total, 1), "sn;", sum(len(s["words"]) for s in out), "token")

asyncio.run(main(sys.argv[1]))
