import os, sys
H = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(H, "..", "engine.html"), encoding="utf-8").read()
head = s.split("/* ====================== SAHNE 1")[0]
a = "ctx.save();for(const pp of parts)stroke(pp,21,INK);for(const pp of parts)stroke(pp,11,'#fff');ctx.restore();"
assert a in head
head = head.replace(a, "ctx.save();parts.forEach((pp,ix)=>stroke(pp,ix==2&&o.torso?30:21,INK));parts.forEach((pp,ix)=>stroke(pp,ix==2&&o.torso?19:11,ix==2?(o.torso||o.limb||'#fff'):(ix==1||ix==3)?(o.leg||o.limb||'#fff'):(o.limb||'#fff')));ctx.restore();")
b = "circ(0,0,R,'#fff',7);"
assert b in head
head = head.replace(b, "circ(0,0,R,o.head||'#fff',7);")
story = open(os.path.join(H, "story.js"), encoding="utf-8").read()
ep = sys.argv[1] if len(sys.argv) > 1 else None
extra = (open(os.path.join(H, "common_ep.js"), encoding="utf-8").read() + "\n" + open(os.path.join(H, "common_ship.js"), encoding="utf-8").read() + "\n" + open(os.path.join(H, "common_more.js"), encoding="utf-8").read() + "\n" + open(os.path.join(H, ep, ep + ".js"), encoding="utf-8").read()) if ep else ""
tail = "\nfunction draw(i,t){ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,W,H);drawStory(t);}\n</script></body></html>\n"
open(os.path.join(H, ("engine_" + ep + ".html") if ep else "engine2.html"), "w", encoding="utf-8").write(head + story + extra + tail)
print("ok")
