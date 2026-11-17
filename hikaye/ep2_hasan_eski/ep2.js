/* ===== Bölüm 2 · Temsilci ===== */
var GROUPS=[[0,1],[2],[3,4],[5],[6],[7]];
TL_NEXT='3.';
const GRN='#3dd68c';
const BARS=[['LİDER A',.78,'#4b6bd0'],['LİDER B',.64,'#6b4bd0'],['ÜNLÜ',.52,'#d04b9b'],['PROFESÖR',.40,'#2fa3a3']];
function barRow(i,label,frac,col,y,w=800){const x0=140;rbox(x0,y,w,96,'#12183a',22,5);if(frac>0.01){ctx.save();ctx.beginPath();ctx.roundRect(x0,y,Math.max(30,w*frac),96,22);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();}txt(label,x0+24,y+50,44,'#fff',8,'900');}
function barLabelFix(){}
const E2_S0=(lt,D,gt)=>{skyGrad('#0a1030','#1a2a5a');stars(1,70);
 const gx=540,gy=1270;ctx.save();ctx.beginPath();ctx.arc(gx,gy,300,0,7);ctx.fillStyle='#2d6fb3';ctx.fill();ctx.clip();
 ctx.fillStyle='#3da35d';for(let k=-1;k<=1;k++){const ox=((lt*40)%700)+k*700-350;for(const [ex,ey,rx,ry] of [[-120,-60,110,70],[100,40,90,120],[-30,150,70,50],[160,-120,60,40]]){ctx.beginPath();ctx.ellipse(gx+ox+ex,gy+ey,rx,ry,0,0,7);ctx.fill();}}
 ctx.restore();circ(gx,gy,300,null,10);
 for(let i=0;i<16;i++){const t0=1.2+i*.38;if(lt<t0)continue;const k=E.back(clamp((lt-t0)/.3)),a=rn(i)*6.28,r=340+rn(i+7)*150;
  const x=clamp(gx+Math.cos(a)*r*1.15,150,930),y=clamp(gy+Math.sin(a)*r*.75,990,1620);
  ctx.save();ctx.translate(x,y);ctx.scale(k,k);rbox(-62,-42,124,84,'#fff',18,5);stroke([[-24,2],[-6,20],[28,-18]],13,GRN);ctx.restore();}
 epTitle(gt,'TEMSİLCİ',null,2);};
const E2_S1=(lt,D,gt)=>{skyGrad('#0a1030','#1a2a5a');stars(.8,50);
 BARS.forEach(([l,f,c],i)=>barRow(i,l,f*E.out(clamp((lt-.2-i*.25)/1.6)),c,1010+i*150));
 txt('OYLAR',540,940,50,'#ffffffaa',0);};
const E2_S2=(lt,D,gt)=>{skyGrad('#0a1030','#1a2a5a');stars(.8,50);
 const t4=TL.sent[4].start,g=clamp((gt-t4)/1.6);
 const dim=1-.55*E.out(clamp((gt-t4)/1));
 ctx.save();ctx.globalAlpha=dim;BARS.forEach(([l,f,c],i)=>barRow(i,l,f,c,1010+i*150));ctx.restore();
 txt('OYLAR',540,940,50,'#ffffffaa',0);
 if(gt<t4)txt('...',540,1300,140,'#ffffff88',0);
 else{const w=800*E.out(g);ctx.save();ctx.beginPath();ctx.roundRect(140,1610,Math.max(40,w*1.0),110,24);ctx.fillStyle='#ffb02e';ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();
  txt('HASAN USTA',140+24+170,1665,52,'#2a1a10',0,'900');if(g>.4)simitRing(140+Math.max(40,w)-40,1665,0,1.1);
  ctx.save();ctx.globalAlpha=.5*E.out(g);const gr=ctx.createRadialGradient(540,1665,10,540,1665,520);gr.addColorStop(0,'rgba(255,200,60,.8)');gr.addColorStop(1,'rgba(255,200,60,0)');ctx.fillStyle=gr;ctx.fillRect(0,1400,W,500);ctx.restore();}};
const E2_S3=(lt,D,gt)=>{skyGrad('#1a1030','#3a2a6a');stars(.8,60);ground('#171028');
 const gr=ctx.createRadialGradient(540,1250,20,540,1250,560);gr.addColorStop(0,'rgba(255,205,80,.55)');gr.addColorStop(1,'rgba(255,205,80,0)');ctx.fillStyle=gr;ctx.fillRect(0,700,W,1000);
 for(const [x,f,d] of [[110,1,0],[250,1,.7],[830,-1,.3],[970,-1,1.1]]){man(x,{p:{aRu:150+14*Math.sin(lt*6+d*5),aRl:165,aLu:-150,aLl:-165,sm:1,eye:.5,mo:.5},t:lt,s:1.05,f,shirt:['#6b4b4b','#4b6b5a','#5a4b6b','#4b5e6b'][Math.floor(d*3)%4]});}
 const r=hasan(540,{s:1.7,p:{aLu:-70,aLl:-80,aRu:70,aRl:80,sm:1,eye:.4}});simitTray(r.head[0],r.head[1]-170,1.5);
 const t=wordT(3,/^yalan/);if(gt>t-.2){const k=E.back(clamp((gt-t+.2)/.4));ctx.save();ctx.translate(840,1010);ctx.rotate(-.18);ctx.scale(k,k);circ(0,0,120,'#e53a3a',10);circ(0,0,92,null,6);ctx.strokeStyle='#fff';ctx.stroke();txt('DÜRÜST',0,5,34,'#fff',0);ctx.restore();}};
const E2_S4=(lt,D,gt)=>{skyGrad('#0b1030','#1f2650');stars(.9,60);skyline(.5,'#0c1230',FL);ground('#0f1328');
 const rx=300,ry=FL-110;rbox(rx-90,ry-70,180,100,'#8a5a30',12,5);circ(rx-35,ry-20,28,'#3a2410',4);stroke([[rx+15,ry-50],[rx+60,ry-50]],5,'#e8d6a0');stroke([[rx+15,ry-30],[rx+60,ry-30]],5,'#e8d6a0');stroke([[rx+60,ry-70],[rx+100,ry-140]],5,INK);
 for(let i=0;i<3;i++){const u=((lt*.9+i/3)%1);ctx.save();ctx.globalAlpha=1-u;ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();ctx.arc(rx+100,ry-140,20+u*70,-.9,.9);ctx.stroke();ctx.restore();}
 const td=2.9,dropped=lt>td;
 const P0={x:560,aRu:dropped?150:150+10*Math.sin(lt*9),aRl:170,aLu:dropped?-150:-10,aLl:dropped?-160:-5,eye:dropped?1:.8,mo:dropped?1:.2,sm:dropped?0:-.2};
 const r=hasan(560,{s:1.4,p:P0});
 if(!dropped)simitTray(r.head[0],r.head[1]-140,1.25);
 else{const u=lt-td,y0=r.head[1]-140,y=Math.min(FL-24,y0+700*u*u);simitTray(r.head[0]-clamp(u*60,0,40),y,1.25);if(y>=FL-24){for(let i=0;i<9;i++){const ex=r.head[0]-80+(i%5)*55+(i>4?30:0)+Math.sin(i*3)*70*clamp(lt-td-.4,0,1);simitRing(ex,FL-12-(i>4?12:0),i*.5,1);}}}
 };
const E2_S5=makeCards(7,['SİMİT','TEPSİSİ','ELLERİ','BOŞ'],(lt)=>{const r=hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E2_S0,E2_S1,E2_S2,E2_S3,E2_S4,E2_S5);
