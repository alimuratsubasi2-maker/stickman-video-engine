/* ===== Bölüm 2 · Temsilci (Kerem, gece kuryesi) ===== */
var GROUPS=[[0],[1],[2,3],[4],[5,6],[7]];
TL_NEXT='3.';
const GRN='#3dd68c';
function barRow(label,frac,col,y,w=800){const x0=140;rbox(x0,y,w,96,'#12183a',22,5);if(frac>0.01){ctx.save();ctx.beginPath();ctx.roundRect(x0,y,Math.max(30,w*frac),96,22);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();}txt(label,x0+24,y+50,44,'#fff',8,'900');}
function kerem(x,o={}){return man(x,{s:o.s||1.3,f:o.f||1,t:o.t||0,walk:o.walk,shirt:'#d9652b',pants:'#2b3042',cap:'#e5a82e',p:o.p||{}});}
function bike(x,y,sc=1){ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);circ(-90,-50,50,null,9);circ(90,-50,50,null,9);rbox(-90,-120,190,60,'#3a4a6a',22,6);rbox(40,-165,70,50,'#e5a82e',10,5);stroke([[60,-120],[95,-50]],9,INK);stroke([[95,-160],[120,-130]],7,INK);ctx.restore();}
function unBuilding(){rbox(40,FL-470,520,470,'#c9d1e2',6,6);for(let i=0;i<6;i++)rbox(80+i*78,FL-390,36,330,'#e6ebf5',4,4);ctx.beginPath();ctx.moveTo(20,FL-470);ctx.lineTo(300,FL-600);ctx.lineTo(580,FL-470);ctx.closePath();ctx.fillStyle='#aab3c8';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();txt('BM',300,FL-505,54,'#2a3350',0);}
function crowd(gt,up){for(const [x,c] of [[640,'#6b4b4b'],[740,'#4b6b5a'],[960,'#5a4b6b'],[1020,'#4b5e6b']]){man(x,{s:.95,p:{hd:up?-8:0,eye:.4},shirt:c});}}
const E2_S0=(lt,D,gt)=>{skyGrad('#0a1030','#1a2a5a');stars(1,70);
 const gx=540,gy=1270;ctx.save();ctx.beginPath();ctx.arc(gx,gy,300,0,7);ctx.fillStyle='#2d6fb3';ctx.fill();ctx.clip();
 ctx.fillStyle='#3da35d';for(let k=-1;k<=1;k++){const ox=((lt*40)%700)+k*700-350;for(const [ex,ey,rx,ry] of [[-120,-60,110,70],[100,40,90,120],[-30,150,70,50],[160,-120,60,40]]){ctx.beginPath();ctx.ellipse(gx+ox+ex,gy+ey,rx,ry,0,0,7);ctx.fill();}}
 ctx.restore();circ(gx,gy,300,null,10);
 for(let i=0;i<16;i++){const t0=1.2+i*.38;if(lt<t0)continue;const k=E.back(clamp((lt-t0)/.3)),a=rn(i)*6.28,r=340+rn(i+7)*150;
  const x=clamp(gx+Math.cos(a)*r*1.15,150,930),y=clamp(gy+Math.sin(a)*r*.75,990,1620);
  ctx.save();ctx.translate(x,y);ctx.scale(k,k);rbox(-62,-42,124,84,'#fff',18,5);stroke([[-24,2],[-6,20],[28,-18]],13,GRN);ctx.restore();}
 epTitle(gt,'TEMSİLCİ',null,2);};
const E2_S1=(lt,D,gt)=>{skyGrad('#0a1030','#1a2a5a');stars(.8,50);
 const g=E.out(clamp((lt-.3)/2.2));
 barRow('LİDER A',.50,'#4b6bd0',1160);barRow('LİDER B',.42,'#6b4bd0',1310);barRow('ÜNLÜ',.30,'#d04b9b',1460);
 ctx.save();const y=1010-0;rbox(140,y,800,96,'#12183a',22,5);ctx.beginPath();ctx.roundRect(140,y,Math.max(40,800*.96*g),96,22);ctx.fillStyle='#ffb02e';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();
 txt('BM BAŞKANI',140+24+190,y+50,46,'#2a1a10',0,'900');
 txt('OYLAR',540,940,50,'#ffffffaa',0);
 saucer(800,380,1.0,lt,0);};
const E2_S2=(lt,D,gt)=>{const t3=TL.sent[3].start;
 skyGrad('#0b1030','#1f2650');stars(.9,60);skyline(.4,'#0c1230',FL);ground('#0f1328');
 unBuilding();saucer(760,300,1.6,lt,900);
 crowd(gt,gt>t3);
 bike(430,FL+6,1.0);
 kerem(560,{s:1.3,f:-1,p:{hd:gt>t3?-8:0,eye:.4,aRu:20,aRl:10}});
 const t2=TL.sent[2].start;if(gt>t2+.3&&gt<t3+.2){const k=E.back(clamp((gt-t2-.3)/.4));ctx.save();ctx.translate(540,1010);ctx.scale(k,k);rbox(-230,-48,460,96,'#e5a82e',24,6);txt('KEREM · GECE KURYESİ',0,2,36,'#2a1a10',0);ctx.restore();}};
const E2_S3=(lt,D,gt)=>{skyGrad('#0b1030','#1f2650');stars(.9,60);skyline(.4,'#0c1230',FL);ground('#0f1328');
 unBuilding();
 const bl=900*(1-E.in(clamp(lt/1.8)));saucer(760,300,1.6,lt,Math.max(0,bl));
 const px=lerp(760,360,E.io(clamp((lt-1.2)/2.0))),sh=Math.sin(lt*45)*4*clamp((lt-1.5)/.5);
 man(px+sh,{s:1.5,f:-1,walk:lt>1.2&&lt<3.4,t:lt,spd:6,shirt:'#1c1c2a',pants:'#1c1c2a',p:{eye:1,mo:.8,hd:-4}});
 if(Math.sin(lt*17)>.5){ctx.save();ctx.globalAlpha=.25;ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);ctx.restore();}
 txt('BM BAŞKANI',540,1010,44,'#ffffffcc',8);};
const E2_S4=(lt,D,gt)=>{const t5=TL.sent[5].start,t6=TL.sent[6].start;
 skyGrad('#0b1030','#1f2650');stars(.9,60);skyline(.4,'#0c1230',FL);ground('#0f1328');
 saucer(540,260,1.7,lt,0);
 const sh=Math.sin(lt*40)*3;man(330+sh,{s:1.5,f:1,shirt:'#1c1c2a',pants:'#1c1c2a',p:{eye:1,mo:.7,hd:-3}});
 if(gt>t5&&gt<t6&&Math.sin(gt*19)>.7){ctx.save();ctx.globalAlpha=.18;ctx.fillStyle='#fff';ctx.fillRect(0,0,W,H);ctx.restore();}
 if(gt>t5+1.8){const k=E.back(clamp((gt-t5-1.8)/.4));ctx.save();ctx.translate(380,720);ctx.scale(k,k);bubble(0,0,560,120,'BU BİR SINAV.',56);ctx.restore();}
 const a=E.io(clamp((gt-t6)/.9));
 if(a>0){ctx.save();ctx.globalAlpha=.8*a;const g=ctx.createLinearGradient(0,330,0,FL);g.addColorStop(0,'rgba(190,255,225,.9)');g.addColorStop(1,'rgba(190,255,225,.25)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(500,330);ctx.lineTo(580,330);ctx.lineTo(990,FL);ctx.lineTo(670,FL);ctx.closePath();ctx.fill();ctx.restore();}
 kerem(830,{s:1.2,f:-1,p:{hd:-6,eye:.9,mo:.4,aRu:10,aRl:5}});
 if(a>.5){ctx.save();ctx.globalAlpha=a;txt('?',830,FL-700,130,'#ffb02e',10);ctx.restore();}};
const E2_S5=makeCards(7,['IŞIĞA','YÜRÜSÜN','MOTORLA','KAÇSIN'],(lt)=>{kerem(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E2_S0,E2_S1,E2_S2,E2_S3,E2_S4,E2_S5);
