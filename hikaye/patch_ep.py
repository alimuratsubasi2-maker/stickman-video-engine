import os
H = os.path.dirname(os.path.abspath(__file__))
def rw(name, fn):
    p = os.path.join(H, name); s = open(p, encoding="utf-8").read(); s = fn(s); open(p, "w", encoding="utf-8").write(s)

def story(s):
    a = "groups=[[0,1],[2],[3],[4],[5],[6,7],[8,9],[10],[11]];"
    if a in s:
        s = s.replace(a, "groups=(typeof GROUPS!=='undefined'?GROUPS:[[0,1],[2],[3],[4],[5],[6,7],[8,9],[10],[11]]);")
    return s
rw("story.js", story)

def asm(s):
    if "import os, sys" not in s: s = s.replace("import os\n", "import os, sys\n", 1)
    if "extra =" not in s:
        s = s.replace('tail = "\\nfunction draw', 'ep = sys.argv[1] if len(sys.argv) > 1 else None\nextra = open(os.path.join(H, ep, ep + ".js"), encoding="utf-8").read() if ep else ""\ntail = "\\nfunction draw')
        s = s.replace("head + story + tail)", "head + story + extra + tail)")
        s = s.replace('"engine2.html"', '("engine_" + ep + ".html") if ep else "engine2.html"')
    return s
rw("assemble.py", asm)

def rend(s):
    if "EP = os.environ" not in s:
        s = s.replace('tl = json.load(open(os.path.join(HERE, "timeline.json"), encoding="utf-8"))',
                      'EP = os.environ.get("EP")\ntl = json.load(open(os.path.join(HERE, EP, "timeline.json") if EP else os.path.join(HERE, "timeline.json"), encoding="utf-8"))')
        s = s.replace('"engine2.html"', '("engine_" + EP + ".html") if EP else "engine2.html"')
    return s
rw("render2.py", rend)
print("patched")
