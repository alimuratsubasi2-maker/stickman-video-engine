import sys, os, glob, json, difflib, re, whisper
d = sys.argv[1]
cfg = json.load(open(os.path.join(d, "script.json"), encoding="utf-8"))
m = whisper.load_model("small")
norm = lambda s: re.sub(r"[^\wçğıöşü ]", " ", s.replace("İ", "i").replace("I", "ı").lower()).split()
for gi, g in enumerate(cfg["groups"]):
    mp3 = os.path.join(d, "tts", f"g{gi:02d}.mp3")
    audio = whisper.load_audio(mp3)
    r = m.transcribe(audio, fp16=False)
    want = " ".join(cfg["sent"][i] for i in g)
    sc = difflib.SequenceMatcher(None, norm(want), norm(r["text"])).ratio()
    print(f"g{gi} dil={r['language']} skor={sc:.2f} | {r['text'].strip()[:110]}")
