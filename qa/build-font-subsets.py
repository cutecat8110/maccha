"""Rebuild same-font WOFF2 subsets: pip install 'fonttools[woff]'.

The full original font remains the fallback for arbitrary form input.
No outlines, hinting or layout features are redesigned.
"""
from pathlib import Path
import json
from fontTools import subset
from fontTools.ttLib import TTFont

root = Path(__file__).resolve().parents[1]
text = ''.join(p.read_text() for p in (root / 'src').rglob('*') if p.suffix in {'.vue', '.ts', '.json'})
text += '年月日星期一二三四五六七八九十今天上下午選擇月份年份上一個下一個'
points = set(map(ord, text)) | set(range(0x20, 0x100)) | set(range(0x2000, 0x2070)) | set(range(0x3000, 0x3040))
css, sizes = [], []
for name, weight in [('Regular', 400), ('Bold', 700)]:
    source = root / f'src/assets/fonts/NotoSerifTC-{name}.ttf'
    target = source.with_name(f'NotoSerifTC-{name}-site.woff2')
    font = TTFont(source)
    chars = sorted(points & font.getBestCmap().keys())
    options = subset.Options()
    options.flavor = 'woff2'
    options.layout_features = ['*']
    sub = subset.Subsetter(options=options)
    sub.populate(unicodes=chars)
    sub.subset(font)
    font.flavor = 'woff2'
    font.save(target)
    css.append(f"@font-face {{ font-family: 'Noto Serif TC'; font-style: normal; font-weight: {weight}; font-display: swap; src: url('../fonts/{target.name}') format('woff2'); }}")
    sizes.append({'weight': weight, 'original_bytes': source.stat().st_size, 'subset_bytes': target.stat().st_size, 'characters': len(chars)})
(root / 'src/assets/styles/font-subsets.css').write_text('\n'.join(css) + '\n')
(root / 'qa/font-sizes.json').write_text(json.dumps(sizes, indent=2) + '\n')
print(json.dumps(sizes))
