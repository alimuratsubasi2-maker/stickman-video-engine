/* ===== Bölüm 9 · Dünya Hazırlanıyor ===== */
var GROUPS=[[0,1],[2],[3],[4],[5],[6],[7]];
TL_NEXT='10.';
function missile(x,y,rot,sc=1){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);rbox(-22,-90,44,150,'#aab6cc',14,6);ctx.beginPath();ctx.moveTo(-22,-90);ctx.lineTo(0,-150);ctx.lineTo(22,-90);ctx.closePath();ctx.fillStyle='#e23d3d';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();for(const s of [-1,1]){ctx.beginPath();ctx.moveTo(s*22,30);ctx.lineTo(s*50,70);ctx.lineTo(s*22,60);ctx.closePath();ctx.fillStyle='#e23d3d';ctx.fill();ctx.stroke();}ctx.restore();}
function mic(x,y,sc=1,rot=0){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);rbox(-16,-20,32,150,'#2a2f3a',12,6);circ(0,-60,48,'#8a93a6',7);ctx.save();ctx.beginPath();ctx.arc(0,-60,42,0,7);ctx.clip();ctx.strokeStyle='#00000044';ctx.lineWidth=3;for(let i=-40;i<40;i+=12){ctx.beginPath();ctx.moveTo(i,-110);ctx.lineTo(i,-10);ctx.stroke();}ctx.restore();ctx.restore();}
function radio2(x,y,sc,t){ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);rbox(-90,-60,180,120,'#8a5a30',14,6);circ(-40,0,32,'#3a2410',5);stroke([[20,-22],[70,-22]],5,'#e8d6a0');stroke([[20,2],[70,2]],5,'#e8d6a0');stroke([[60,-60],[100,-130]],5,INK);for(let i=0;i<3;i++){const u=((t*.9+i/3)%1);ctx.save();ctx.globalAlpha=1-u;ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();ctx.arc(100,-130,20+u*70,-.9,.9);ctx.stroke();ctx.restore();}ctx.restore();}
const E9_S0=(lt,D,gt)=>{skyGrad('#10081e','#2a1030');stars(.8,60);skyline(.6,'#150a24',FL);ground('#0f0818');
 const f=Math.sin(lt*8)>0;ctx.fillStyle=`rgba(255,40,40,${f?.16:.03})`;ctx.fillRect(-100,-100,W+200,H+200);
 saucer(540,360,2.0,lt,0);for(let i=0;i<7;i++){missile(120+i*140,FL-150,-.35+i*.1,.9);}
 const secs=Math.max(0,86400-86400+Math.floor(lerp(35,0,clamp(lt/D))));ctx.save();ctx.font='900 130px "Courier New", monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor='#ff2b2b';ctx.shadowBlur=26;ctx.fillStyle='#ff4d4d';ctx.fillText('00:00:'+String(secs).padStart(2,'0'),540,1010);ctx.restore();
 epTitle(gt,'DÜNYA','HAZIRLANIYOR',9);};
const E9_S1=(lt,D,gt)=>{skyGrad('#0b1220','#1a2a3a');ctx.fillStyle='#14202c';ctx.fillRect(-100,FL-60,W+200,H);
 rbox(190,1250,700,60,'#6b4a2c',12,6);rbox(240,1310,600,260,'#583b22',10,6);
 for(const [x,f,c] of [[150,1,'#4b6b4b'],[400,1,'#6b4b4b'],[680,-1,'#4b5e6b'],[930,-1,'#6b6b4b']]){man(x,{s:1.15,floor:FL-60,p:{aRu:130+20*Math.sin(lt*5+x),aRl:150,mo:.6,eye:.8,hd:5*Math.sin(lt*3+x)},t:lt,f,shirt:c,cap:null});}
 const k=E.back(clamp((lt-.8)/.4));ctx.save();ctx.translate(540,1070);ctx.scale(k,k);rbox(-430,-90,860,180,'#fff',40,6);txt('Temsilcimiz dönmedi!',0,6,66,'#d03030',0);ctx.restore();};
const E9_S2=(lt,D,gt)=>{shipInside(lt);ctx.save();rbox(180,780,720,520,'#10182e',24,8);ctx.save();ctx.beginPath();ctx.roundRect(196,796,688,488,16);ctx.clip();ctx.fillStyle='#0a1030';ctx.fillRect(196,796,688,488);ctx.fillStyle='#2d6fb3';ctx.beginPath();ctx.arc(540,1180,180,0,7);ctx.fill();ctx.fillStyle='#3da35d';ctx.beginPath();ctx.ellipse(500,1150,70,50,0,0,7);ctx.fill();for(let i=0;i<7;i++){missile(300+i*60,1300,-.2+i*.07,.35);}ctx.restore();
 const f=Math.sin(lt*8)>0;ctx.fillStyle=`rgba(255,40,40,${f?.12:0})`;ctx.fillRect(196,796,688,488);ctx.restore();
 hasan(260,{s:1.2,floor:FL-20,p:{eye:1,mo:.5,aRu:150,aRl:160,aLu:-150,aLl:-160}});zorg(840,lt,1.3);};
const E9_S3=(lt,D,gt)=>{shipInside(lt);hasan(240,{s:1.25,floor:FL-20,p:{eye:.8,sm:0,aRu:60,aRl:100}});zorg(800,lt,1.5,-1,{arm:-30});radio2(lerp(760,520,E.io(clamp(lt/1.8))),FL-20-lerp(430,320,E.io(clamp(lt/1.8))),1.2,lt);};
const E9_S4=(lt,D,gt)=>{shipInside(lt);hasan(200,{s:1.2,floor:FL-20,p:{eye:.9,mo:.3}});
 const secs=Math.max(0,Math.ceil(60-lt*(60/D)));ctx.save();ctx.font='900 180px "Courier New", monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor='#ff2b2b';ctx.shadowBlur=24;ctx.fillStyle='#ff4d4d';ctx.fillText('00:'+String(secs).padStart(2,'0'),600,1150);ctx.restore();txt('1 DAKİKA',600,1020,56,'#fff',9);
 const u=(lt*1.1)%1;sweat(280,1110+u*60,1.2,1-u);};
const E9_S5=(lt,D,gt)=>{skyGrad('#0a0e22','#1a2a50');const br=Math.sin(lt*1.3);const gl=ctx.createRadialGradient(540,1000,20,540,1000,500);gl.addColorStop(0,'rgba(255,205,80,.3)');gl.addColorStop(1,'rgba(255,205,80,0)');ctx.fillStyle=gl;ctx.fillRect(0,500,W,1100);
 hasan(540,{s:2.5,y:FL-202*2.5+5*br,floor:FL,shadow:false,p:{tl:1.5*br,eye:.9,mo:lt>D-1.2?.8:0,aRu:50,aRl:150,aLu:-12}});mic(700,1280,1.4,-.3);
 for(let i=0;i<2;i++){const u=((lt*.8+i*.5)%1);sweat(420+i*200,660+u*90,1.5,1-u);}};
const E9_S6=makeCards(7,['RADYODAN','SESLENSİN','GEMİDEN','UYARI'],(lt)=>{hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E9_S0,E9_S1,E9_S2,E9_S3,E9_S4,E9_S5,E9_S6);
