/* ===== Gemi içi ortak sahneler (Bölüm 3'ten itibaren) ===== */
function shipInside(t){ctx.fillStyle='#cdd7e6';ctx.fillRect(-100,-100,W+200,H+200);ctx.fillStyle='#aab6cc';ctx.fillRect(-100,FL-20,W+200,H);stroke([[-100,FL-20],[W+100,FL-20]],6,INK);
 for(let i=0;i<4;i++){rbox(60+i*250,480,170,120,'#e9eef7',20,5);}
 for(const x of [180,540,900]){circ(x,1000,110,'#0b1030',10);ctx.save();ctx.beginPath();ctx.arc(x,1000,104,0,7);ctx.clip();ctx.fillStyle='#fff';for(let k=0;k<8;k++)ctx.fillRect(x-90+rn(k+x)*180,910+rn(k+9+x)*180,4,4);ctx.restore();}
 const g=.5+.5*Math.sin(t*2);ctx.fillStyle=`rgba(120,220,255,${.35+.25*g})`;ctx.fillRect(0,300,W,24);ctx.fillRect(0,330,W,10);}
function zorg(x,t,sc=1.5,f=-1,o={}){alien(x,FL-20,sc,t,{f,arm:o.arm||0});}
function cloud(x,y,s=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.beginPath();for(const [cx,cy,r] of [[-90,10,70],[-30,-45,80],[50,-40,75],[100,15,65],[0,30,85]]){ctx.moveTo(cx+r,cy);ctx.arc(cx,cy,r,0,7);}ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();}
function kid(x,t,sc,o={}){alien(x,FL-20,sc,t+x,{f:o.f||1,arm:Math.sin(t*2+x)*6});}
function bread(x,y,sc=1,rot=0){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);ctx.beginPath();ctx.ellipse(0,0,150,70,0,0,7);ctx.fillStyle='#d9a35f';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=INK;ctx.stroke();for(const dx of [-70,0,70])stroke([[dx-18,-40],[dx+18,20]],8,'#a8742e');ctx.restore();}
function notebook(x,y,sc=1,rot=0){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);rbox(-110,-150,220,300,'#7a4a2b',16,7);rbox(-86,-120,172,64,'#e8d6a0',8,4);txt('VERESİYE',0,-86,30,'#4a2a10',0);
 for(let i=0;i<6;i++){circ(-110,-125+i*50,12,'#c9c9c9',4);}stroke([[-70,-10],[80,-10]],5,'#00000033');stroke([[-70,20],[60,20]],5,'#00000033');ctx.restore();}
