import urllib.request
import sys
import os

urls = {
    "powerpoint.svg": "https://cdn.worldvectorlogo.com/logos/microsoft-powerpoint-2013.svg",
    "smartinterviews.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://smartinterviews.in&size=256",
    "gamma.svg": "https://cdn.worldvectorlogo.com/logos/gamma-1.svg",
    "codechef.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://codechef.com&size=256",
    "hackerrank.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hackerrank.com&size=256",
    "supabase.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://supabase.com&size=256",
    "figma.png": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://figma.com&size=256"
}

output_dir = "public/toolkit"
for name, url in urls.items():
    path = os.path.join(output_dir, name)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            if response.getcode() == 200:
                data = response.read()
                if b"<html" in data[:50].lower():
                    print(f"FAILED {name}: Downloaded HTML instead of image")
                else:
                    with open(path, 'wb') as f:
                        f.write(data)
                    print(f"SUCCESS {name}")
            else:
                print(f"FAILED {name}: HTTP {response.getcode()}")
    except Exception as e:
        print(f"FAILED {name}: {e}")
