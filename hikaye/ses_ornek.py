"""Çalıştır: Chatterbox-TTS\\venv\\Scripts\\python ses_ornek.py  -> ses_ornekleri/*.wav"""
import os, subprocess, torch, torchaudio as ta
from chatterbox.mtl_tts import ChatterboxMultilingualTTS
H = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(H, "ses_ornekleri"); os.makedirs(OUT, exist_ok=True)
FF = r"C:\Users\MSI\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin\ffmpeg.exe"
ref = os.path.join(OUT, "ahmet_ref.wav")
subprocess.run([FF, "-y", "-loglevel", "error", "-i", os.path.join(H, "tts", "s03.mp3"), "-t", "8", "-ar", "24000", "-ac", "1", ref], check=True)
TEXT = "Bir sabah uyanıyorsun ve gökyüzü kapkara. Şehirlerin tam üstünde, dev uzay gemileri duruyor. Sonra gemilerden tek bir ses geliyor."
dev = "cuda" if torch.cuda.is_available() else "cpu"
tts = ChatterboxMultilingualTTS.from_pretrained(device=dev)
cfgs = [("A_varsayilan_sakin", None, .5, .5), ("B_varsayilan_dramatik", None, .85, .35), ("C_ahmet_klon_sakin", ref, .6, .5), ("D_ahmet_klon_dramatik", ref, .9, .3)]
for name, rp, ex, cfg in cfgs:
    kw = dict(language_id="tr", exaggeration=ex, cfg_weight=cfg)
    if rp: kw["audio_prompt_path"] = rp
    wav = tts.generate(TEXT, **kw)
    ta.save(os.path.join(OUT, name + ".wav"), wav, tts.sr)
    print("ok", name, wav.shape[1] / tts.sr, "sn", flush=True)
