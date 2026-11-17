# Ã‡Ã¶p Adam Video Motoru

Ã‡Ã¶p adam tarzÄ± kÄ±sa komedi/hikÃ¢ye videolarÄ±nÄ± **HTML animasyonundan** Ã¼reten motor. Sahneler `engine.html` iÃ§inde Ã§izilir, `render.py` tarayÄ±cÄ±dan kare kare yakalayÄ±p ffmpeg ile videoya Ã§evirir.

```bash
pip install playwright && playwright install chromium
python render.py <sahne_no> frames 0,1.5,3          # Ã¶nizleme kareleri
python render.py <sahne_no> video cikis.mp4 ses.wav # video
```

- `engine.html`: karakter, hareket ve sahne motoru
- `render.py`: Playwright ile kare yakalama ve video birleÅŸtirme
- `sfx.py`: kod ile ses efekti Ã¼retimi
- `hikaye/`: sahne metinleri

> ÃœretilmiÅŸ videolar ve ses modelleri boyut nedeniyle depoda yok.

**Teknolojiler:** Python Â· Playwright Â· HTML/CSS/JS Â· ffmpeg