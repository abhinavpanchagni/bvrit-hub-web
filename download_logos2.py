import urllib.request
import os

output_dir = "public/toolkit"

urls = {
    "nptel.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://nptel.ac.in&size=256",
    "fusion360.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://autodesk.com/products/fusion-360&size=256",
    "unstop.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://unstop.com&size=256",
    "tinkercad.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://tinkercad.com&size=256",
    "wokwi.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://wokwi.com&size=256",
}

for name, url in urls.items():
    path = os.path.join(output_dir, name)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = response.read()
            if b"<html" in data[:50].lower():
                print(f"FAILED {name}: Got HTML instead of image")
            else:
                with open(path, 'wb') as f:
                    f.write(data)
                print(f"SUCCESS {name} ({len(data)} bytes)")
    except Exception as e:
        print(f"FAILED {name}: {e}")
