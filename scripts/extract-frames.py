#!/usr/bin/env python3
"""
Extract frames from a Lottie JSON (frame-sequence export) into optimized
WebP files and a manifest with per-frame background colors.

Usage:
    python3 scripts/extract-frames.py
"""

import base64
import io
import json
import os
from pathlib import Path

from PIL import Image

LOTTIE_PATH = Path("public/vixio animation JSON (2x Speed).json")
OUTPUT_DIR = Path("public/frames")
TARGET_W, TARGET_H = 960, 540
WEBP_QUALITY = 80


def rgb_to_hex(r: int, g: int, b: int) -> str:
    return f"#{r:02x}{g:02x}{b:02x}"


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    with open(LOTTIE_PATH, "r") as f:
        data = json.load(f)

    fps = data["fr"]
    frame_count = data["op"] - data["ip"]
    assets = data["assets"]

    print(f"Lottie: {len(assets)} assets, {data['w']}x{data['h']} @ {fps}fps")
    print(f"Output: {TARGET_W}x{TARGET_H} WebP q{WEBP_QUALITY}")

    backgrounds: list[str] = []
    total_bytes = 0

    for i, asset in enumerate(assets):
        raw = base64.b64decode(asset["p"].split(",")[1])
        img = Image.open(io.BytesIO(raw)).convert("RGB")
        img = img.resize((TARGET_W, TARGET_H), Image.LANCZOS)

        bg_pixel = img.getpixel((0, 0))
        backgrounds.append(rgb_to_hex(*bg_pixel))

        out_path = OUTPUT_DIR / f"frame-{i + 1:03d}.webp"
        img.save(out_path, "WEBP", quality=WEBP_QUALITY)
        total_bytes += out_path.stat().st_size

        if (i + 1) % 10 == 0 or i == len(assets) - 1:
            print(f"  [{i + 1}/{len(assets)}] {total_bytes / 1024:.0f} KB so far")

    manifest = {
        "fps": fps,
        "frameCount": frame_count,
        "width": TARGET_W,
        "height": TARGET_H,
        "backgrounds": backgrounds,
    }

    manifest_path = OUTPUT_DIR / "manifest.json"
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)

    print(f"\nDone: {len(assets)} frames, {total_bytes / 1024 / 1024:.2f} MB total")
    print(f"Manifest: {manifest_path}")


if __name__ == "__main__":
    main()
