import os

assets_dir = r"d:\planetlife final\planet_life\frontend\dist\assets"
index_html = r"d:\planetlife final\planet_life\frontend\dist\index.html"

old_home, new_home = "Home-BJq27Bcr_v6.js", "Home-BJq27Bcr_v7.js"
old_index, new_index = "index-NJf32O81_v6.js", "index-NJf32O81_v7.js"

os.rename(os.path.join(assets_dir, old_home), os.path.join(assets_dir, new_home))

with open(os.path.join(assets_dir, old_index), "r", encoding="utf-8") as f:
    ic = f.read()
ic = ic.replace(f"assets/{old_home}", f"assets/{new_home}").replace(f"./{old_home}", f"./{new_home}")
with open(os.path.join(assets_dir, new_index), "w", encoding="utf-8") as f:
    f.write(ic)
os.remove(os.path.join(assets_dir, old_index))

hp = os.path.join(assets_dir, new_home)
with open(hp, "r", encoding="utf-8") as f:
    hc = f.read()
with open(hp, "w", encoding="utf-8") as f:
    f.write(hc.replace(old_index, new_index))

for fn in os.listdir(assets_dir):
    if fn.endswith(".js") and fn not in (new_home, new_index):
        fp = os.path.join(assets_dir, fn)
        with open(fp, "r", encoding="utf-8") as f:
            fc = f.read()
        if old_index in fc:
            with open(fp, "w", encoding="utf-8") as f:
                f.write(fc.replace(old_index, new_index))

with open(index_html, "r", encoding="utf-8") as f:
    html = f.read()
with open(index_html, "w", encoding="utf-8") as f:
    f.write(html.replace(f"/assets/{old_index}", f"/assets/{new_index}"))

print("Bumped to v7!")
os.remove(__file__)
