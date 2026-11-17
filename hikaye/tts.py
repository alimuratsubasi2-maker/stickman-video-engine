"""Hikaye seslendirmesi: cümle cümle edge-tts (Ahmet) + kelime zamanları -> timeline.json"""
import sys, os, json, asyncio, subprocess
sys.path.insert(0, r"C:\Users\MSI\Desktop\YAPAY ZEKA PROJELER\OpenMontage")
from psikoloji_reels import avastfix  # noqa  (Avast SSL düzeltmesi)
import edge_tts

HERE = os.path.dirname(os.path.abspath(__file__))
FF = r"C:\Users\MSI\AppData\Local\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\ffmpeg-9.0-full_build\bin"
VOICE, RATE = "tr-TR-AhmetNeural", "+6%"

SENT = [
 "Bir sabah uyanıyorsun ve gökyüzü kapkara.",
 "Şehirlerin tam üstünde, dev uzay gemileri duruyor.",
 "İlk saatlerde herkes panikte. Marketler boşalıyor, yollar tıkanıyor.",
 "Sonra gemilerden tek bir ses geliyor. Yirmi dört saatiniz var. Dünya adına konuşacak tek bir temsilci seçin.",
 "Liderler toplanıyor ama kimse kimseyi seçmiyor. Herkes kendi adayını öneriyor.",
 "Bu arada apartmanlarda komşular, ilk kez birbirinin kapısını çalıyor. Kimi çay getiriyor, kimi ekmeğini paylaşıyor.",
 "Yirmi dördüncü saat doluyor. Gemilerden bir ışık iniyor ve küçük bir uzaylı, elinde bir not bırakıyor.",
 "Not şöyle diyor: Teşekkürler. Aradığımızı bulduk.",
 "Gemiler sessizce gökyüzünden siliniyor.",
 "Meğer onlar sadece şunu görmeye gelmişlerdi: Bu gezegende, hâlâ birbirine yardım eden insanlar var mı?",
 "Ertesi gün komşular yine birbirini görmezden geliyor.",
 "Peki iyi olmak için neden bir istilaya ihtiyacımız var? Sence gerçekten birleşir miydik? A, evet birleşirdik. B, hayır, yine kavga ederdik. Yorumlara yaz, en çok seçilen cevapla ikinci bölüm geliyor.",
]

async def one(i, text):
    mp3 = os.path.join(HERE, "tts", f"s{i:02d}.mp3")
    words = []
    com = edge_tts.Communicate(text, VOICE, rate=RATE, boundary="WordBoundary")
    with open(mp3, "wb") as f:
        async for ch in com.stream():
            if ch["type"] == "audio": f.write(ch["data"])
            elif ch["type"] == "WordBoundary":
                words.append([ch["text"], ch["offset"] / 1e7, (ch["offset"] + ch["duration"]) / 1e7])
    return mp3, words

async def main():
    os.makedirs(os.path.join(HERE, "tts"), exist_ok=True)
    res = [await one(i, t) for i, t in enumerate(SENT)]
    tl, t0 = [], 0.6
    for i, (mp3, words) in enumerate(res):
        d = float(subprocess.check_output([FF + r"\ffprobe.exe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", mp3]).decode().strip())
        tl.append({"i": i, "text": SENT[i], "start": t0, "dur": d, "mp3": mp3,
                   "words": [[w, t0 + a, t0 + b] for w, a, b in words]})
        t0 += d + 0.4
    json.dump({"sent": tl, "total": t0 + 1.8}, open(os.path.join(HERE, "timeline.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("toplam", round(t0 + 1.8, 1), "sn;", sum(len(s["words"]) for s in tl), "kelime zamanı")

asyncio.run(main())

