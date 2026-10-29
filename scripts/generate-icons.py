"""Generates the app icons in public/icons.

iOS applies its own rounded mask, so the icon is a full-bleed square with no transparency.
Run from the project root: python3 scripts/generate-icons.py
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "icons"
OUT.mkdir(parents=True, exist_ok=True)

SIZE = 1024
BG = (28, 25, 23)          # stone 900, matches the app theme color
AMBER = (245, 158, 11)     # amber 500
RED = (174, 28, 40)        # Dutch flag red
WHITE = (255, 255, 255)
BLUE = (33, 70, 139)       # Dutch flag blue
FONT = "/usr/share/fonts/truetype/google-fonts/Poppins-Bold.ttf"

img = Image.new("RGB", (SIZE, SIZE), BG)
draw = ImageDraw.Draw(img)

font = ImageFont.truetype(FONT, 470)
text = "NL"
left, top, right, bottom = draw.textbbox((0, 0), text, font=font)
text_w, text_h = right - left, bottom - top
draw.text(((SIZE - text_w) / 2 - left, 300 - top), text, font=font, fill=AMBER)

# Dutch tricolor band across the bottom third
band_top = 800
stripe_h = (SIZE - band_top) // 3
draw.rectangle([0, band_top, SIZE, band_top + stripe_h], fill=RED)
draw.rectangle([0, band_top + stripe_h, SIZE, band_top + 2 * stripe_h], fill=WHITE)
draw.rectangle([0, band_top + 2 * stripe_h, SIZE, SIZE], fill=BLUE)

img.save(OUT / "icon-1024.png")
for size, name in [(180, "apple-touch-icon.png"), (192, "icon-192.png"), (512, "icon-512.png")]:
    img.resize((size, size), Image.LANCZOS).save(OUT / name)
print("Icons written to", OUT)
