/* ===== Bölüm 7 · Üçüncü Sınav: Fedakârlık ===== */
var GROUPS=[[0,1],[2],[3],[4],[5],[6],[7]];
TL_NEXT='8.';
function house(x,y,sc=1){ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);rbox(-120,-120,240,170,'#e8d6a0',10,6);ctx.beginPath();ctx.moveTo(-150,-120);ctx.lineTo(0,-230);ctx.lineTo(150,-120);ctx.closePath();ctx.fillStyle='#c0542e';ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=INK;ctx.stroke();rbox(-30,-50,60,100,'#6b4a2c',6,5);rbox(-100,-90,50,50,'#9bd0ff',6,5);rbox(50,-90,50,50,'#9bd0ff',6,5);ctx.restore();}
function cellBox(x,y,sc=1,t=0){ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);const g=.5+.5*Math.sin(t*6);const gl=ctx.createRadialGradient(0,0,10,0,0,150);gl.addColorStop(0,`rgba(61,214,140,${.5+.3*g})`);gl.addColorStop(1,'rgba(61,214,140,0)');ctx.fillStyle=gl;ctx.fillRect(-150,-150,300,300);rbox(-36,-70,72,140,'#14281f',16,7);ctx.fillStyle=`rgba(61,214,140,${.7+.3*g})`;ctx.beginPath();ctx.roundRect(-26,-58,52,116,10);ctx.fill();ctx.beginPath();ctx.moveTo(6,-40);ctx.lineTo(-14,4);ctx.lineTo(0,4);ctx.lineTo(-6,40);ctx.lineTo(16,-6);ctx.lineTo(2,-6);ctx.closePath();ctx.fillStyle='#fff';ctx.fill();ctx.restore();}
function sickBed(x,y,t){ctx.save();ctx.translate(x,y);rbox(-260,-40,520,100,'#8e68bb',16,7);rbox(-240,-110,150,80,'#fff',34,6);ctx.beginPath();ctx.ellipse(-165,-110,58,70,0,0,7);ctx.fillStyle='#b9d8b0';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();stroke([[-195,-110],[-165,-100]],5,INK);stroke([[-150,-110],[-125,-102]],5,INK);rbox(-100,-120,330,110,'#7aa7e0',28,6);ctx.restore();
 ctx.save();ctx.translate(x+330,y-280);rbox(-100,-80,200,160,'#10182e',16,6);ctx.strokeStyle='#3dd68c';ctx.lineWidth=5;ctx.beginPath();for(let i=0;i<=40;i++){const px=-85+i*4.2,ph=((i+Math.floor(t*6))%20);const py=ph===9?-30:ph===10?30:ph===11?-6:0;i?ctx.lineTo(px,py):ctx.moveTo(px,py);}ctx.stroke();ctx.restore();}
const E7_S0=(lt,D,gt)=>{const t1=TL.sent[1].start-SC[0].a;ctx.save();if(lt>t1){ctx.translate(8*Math.sin(lt*40),6*Math.cos(lt*33));}
 shipInside(lt);hasan(300,{s:1.2,floor:FL-20,p:{eye:.9,mo:.3,tl:lt>t1?4*Math.sin(lt*30):0}});
 if(lt>t1){const f=Math.sin(lt*10)>0;for(const x of [150,540,930]){circ(x,380,40,f?'#ff4040':'#6b1f1f',6);}ctx.fillStyle=`rgba(255,40,40,${f?.18:.04})`;ctx.fillRect(-100,-100,W+200,H+200);}
 else{const gl=Math.sin(lt*14)>0;rbox(590,FL-20-520,240,160,'#10182e',20,6);circ(710,FL-20-440,40,gl?'#3dd68c':'#1a3a2a',0);}ctx.restore();};
const E7_S1=(lt,D,gt)=>{shipInside(lt);hasan(250,{s:1.2,floor:FL-20,p:{eye:.9,mo:.3}});const x=lerp(1400,800,E.out(clamp(lt/1.0)));zorg(x,lt*1.5,1.5,-1,{arm:0});cellBox(x-140,FL-20-1.5*190,1.0,lt);
 const f=Math.sin(lt*10)>0;ctx.fillStyle=`rgba(255,40,40,${f?.1:.02})`;ctx.fillRect(-100,-100,W+200,H+200);};
const E7_S2=(lt,D,gt)=>{shipInside(lt);hasan(540,{s:1.4,floor:FL-20,p:{eye:.8,hd:Math.sin(lt*2)*6,aRu:60,aRl:120}});cellBox(540+120,FL-20-460,1.1,lt);
 const a=clamp((lt-2.0)/.5);if(a>0){ctx.save();ctx.globalAlpha=a;house(170,1130,.8);txt('EV',170,1270,56,'#fff',10);ctx.restore();}
 const b=clamp((lt-4.0)/.5);if(b>0){ctx.save();ctx.globalAlpha=b;rbox(800,1060,230,100,'#8e68bb',16,6);ctx.beginPath();ctx.ellipse(850,1040,40,50,0,0,7);ctx.fillStyle='#b9d8b0';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();txt('ÇOCUK',915,1270,56,'#fff',10);ctx.restore();}};
const E7_S3=(lt,D,gt)=>{shipInside(lt);hasan(220,{s:1.3,floor:FL-20,p:{eye:.8,mo:.1,sm:-.3,hd:-5}});sickBed(720,FL-20-90,lt);
 const t=clamp((lt-2.4)/.8);if(t>0){ctx.save();ctx.globalAlpha=t;for(const [dx,dy] of [[-165,-150]]){ctx.beginPath();ctx.ellipse(720+dx-20,FL-20-90-110,10,12*(1-t*.2),0,0,7);ctx.fillStyle='#111';ctx.fill();}ctx.restore();}};
const E7_S4=(lt,D,gt)=>{shipInside(lt);const k=Math.floor(lt/2.2)%3;hasan(540,{s:1.4,floor:FL-20,p:{eye:.6,hd:4*Math.sin(lt*2),sm:.1,aRu:160,aRl:150}});
 const ca=E.back(clamp((lt-Math.floor(lt/2.2)*2.2)/.4));ctx.save();ctx.translate(830,1000);ctx.scale(ca,ca);ctx.translate(-830,-1000);
 cloud(830,1000,1.05);
 if(k===0)house(830,1050,.55);else if(k===1)simitTray(830,1030,1.2);else{for(let i=0;i<3;i++)rbox(740+i*60,930+(i%2)*20,50,110,'#4b5870',6,4);for(let i=0;i<4;i++)circ(720+i*55,1090,14,'#e6e3de',4);}
 ctx.restore();};
const E7_S5=(lt,D,gt)=>{skyGrad('#1a1030','#3a2a6a');stars(.8,60);ground('#171028');
 ctx.save();ctx.translate(540,1230);ctx.rotate(Math.sin(lt*1.5)*.08);stroke([[-330,0],[330,0]],16,'#e8eefc');stroke([[0,0],[0,260]],18,'#e8eefc');rbox(-120,260,240,40,'#8a93a6',14,6);
 for(const sx of [-330,330]){stroke([[sx,0],[sx-70,150],[sx+70,150],[sx,0]],5,INK);ctx.beginPath();ctx.ellipse(sx,170,90,24,0,0,7);ctx.fillStyle='#e8eefc';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();}
 ctx.restore();house(210,1260,.5);ctx.save();ctx.translate(870,1230);ctx.beginPath();ctx.ellipse(0,0,40,50,0,0,7);ctx.fillStyle='#b9d8b0';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();
 const t=wordT(5,/^doğru/)||0;if(gt>TL.sent[6].start+3.0){const k=E.back(clamp((gt-TL.sent[6].start-3.0)/.4));ctx.save();ctx.translate(540,1060);ctx.scale(k,k);rbox(-420,-70,840,140,'#12183a',34,6);txt('DOĞRU CEVAP YOK',0,6,70,'#ffb02e',0);ctx.restore();}};
const E7_S6=makeCards(7,['EVE','DÖNSÜN','ÇOCUĞU','SEÇSİN'],(lt)=>{hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E7_S0,E7_S1,E7_S2,E7_S3,E7_S4,E7_S5,E7_S6);
