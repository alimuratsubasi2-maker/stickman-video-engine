/* ===== Bölüm 1 · Gökyüzü Kararıyor ===== */
var GROUPS=[[0,1],[2],[3],[4],[5],[6],[7]];
const _A=SCN[0],_B=SCN[1],_C=SCN[2],_D=SCN[3];
function mustache(h,s=1){stroke([[h[0]-30*s,h[1]+14*s],[h[0]-14*s,h[1]+7*s],[h[0],h[1]+12*s]],6,'#2a1a10');stroke([[h[0],h[1]+12*s],[h[0]+14*s,h[1]+7*s],[h[0]+30*s,h[1]+14*s]],6,'#2a1a10');}
function simitTray(x,y,sc=1){ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);rbox(-100,0,200,16,'#b8bcc6',8,4);
 for(let i=0;i<5;i++){const cx=-60+i*30,cy=-10-(i%2)*6;ctx.beginPath();ctx.ellipse(cx,cy,24,15,0,0,7);ctx.lineWidth=10;ctx.strokeStyle='#c9812e';ctx.stroke();ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.stroke();}
 for(let i=0;i<4;i++){const cx=-45+i*30;ctx.beginPath();ctx.ellipse(cx,-28,24,15,0,0,7);ctx.lineWidth=10;ctx.strokeStyle='#d99a45';ctx.stroke();}
 ctx.restore();}
const K_CLOCK=(lt,D,gt)=>{skyGrad('#07091a','#1a2148');stars(1,60);skyline(.7,'#0b1030',FL);ground('#0a0e22');
 saucer(540,330,1.9,lt,1000);
 const hrs=lerp(24,.02,E.io(clamp(lt/D))),hh=hrs|0,mm=((hrs%1)*60|0),ss=(((hrs*60)%1)*60|0);
 const clock=[hh,mm,ss].map(v=>String(v).padStart(2,'0')).join(':');const pulse=.6+.4*Math.sin(lt*6);
 ctx.save();ctx.font='900 190px "Courier New", monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor='#ff2b2b';ctx.shadowBlur=20+30*pulse;ctx.fillStyle=hrs<6?'#ff3b3b':'#ff6b6b';ctx.fillText(clock,540,1150);ctx.restore();
 txt('KALAN SÜRE',540,1020,46,'#ffffffaa',0);
 for(let i=0;i<5;i++){const x=120+i*210;man(x,{p:{hd:-12,eye:.8,mo:.4+.3*Math.sin(lt*3+i),aRu:140,aRl:150},t:lt,s:1.0,shirt:['#5a4f6e','#3f6a5c','#6b4b4b','#4b5870','#6b6b4b'][i]});}};
const H_HASAN=(lt,D,gt)=>{skyGrad('#0b1030','#1f2650');stars(.9,60);skyline(.5,'#0c1230',FL);ground('#0f1328');
 rbox(640,880,400,780,'#2d2a45',10,6);for(let r=0;r<5;r++)for(let c=0;c<3;c++){rbox(675+c*115,920+r*140,80,100,(r*3+c)%4==0?'#ffd36b':'#1b2646',6,4);}
 const rx=300,ry=FL-110;rbox(rx-90,ry-70,180,100,'#8a5a30',12,5);circ(rx-35,ry-20,28,'#3a2410',4);stroke([[rx+15,ry-50],[rx+60,ry-50]],5,'#e8d6a0');stroke([[rx+15,ry-30],[rx+60,ry-30]],5,'#e8d6a0');stroke([[rx+60,ry-70],[rx+100,ry-140]],5,INK);
 for(let i=0;i<3;i++){const u=((lt*.9+i/3)%1);ctx.save();ctx.globalAlpha=1-u;ctx.strokeStyle='#fff';ctx.lineWidth=5;ctx.beginPath();ctx.arc(rx+100,ry-140,20+u*70,-.9,.9);ctx.stroke();ctx.restore();}
 const scr=Math.sin(lt*2.2);const P0=P({x:480,y:FL-210,pl:1,hd:6+4*scr,aRu:150+10*Math.sin(lt*9),aRl:170,eye:.8,mo:.2,sm:-.2});
 const r=figure(P0,{f:1,s:1.4,floor:FL,head:'#e6e3de',limb:'#aeb3bb',torso:'#6b8a9a',leg:'#343a4a',cap:'#d8cfa8'});mustache(r.head,1.35);
 simitTray(r.head[0],r.head[1]-140,1.25);
 const a=clamp((lt-.2)/.4);if(a>0){ctx.save();ctx.globalAlpha=a;rbox(250,1730,580,90,'#12183a',22,0);txt('HASAN USTA · SİMİTÇİ',540,1776,42,'#ffb02e',0);ctx.restore();}};
const I_CARDS=(lt,D,gt)=>{skyGrad('#07091a','#141a3a');stars(.7,50);skyline(.3,'#0b1030');ground('#0a0e22');
 const tA=wordT(7,/^A,/),tB=wordT(7,/^B,/);
 const card=(x,y,col,L,l1,l2,t0)=>{if(gt<t0-.1)return;const k=E.back(clamp((gt-t0)/.35));ctx.save();ctx.translate(x,y);ctx.scale(k,k);rbox(-250,-130,500,260,'#121a38',34,6);ctx.beginPath();ctx.roundRect(-250,-130,500,260,34);ctx.lineWidth=9;ctx.strokeStyle=col;ctx.stroke();circ(-170,0,52,col,0);txt(L,-170,3,70,'#fff',0);txt(l1,50,-30,56,'#fff',0);txt(l2,50,38,44,col,0);ctx.restore();};
 card(540,1180,'#3dd68c','A','LİDERLER','SEÇSİN',tA);card(540,1470,'#ff5a5a','B','SIRADAN','BİRİ SEÇSİN',tB);
 man(150,{p:{hd:8,eye:.3,aRu:140,aRl:150},t:lt,shirt:'#4b5870'});txt('?',150,FL-700,120,'#ffb02e',10);
 const tE=wordT(7,/^en$/);if(gt>tE-.2){const k=clamp((gt-tE)/.4);ctx.save();ctx.globalAlpha=k;rbox(250,1620,580,86,'#e53a3a',22,0);txt('2. BÖLÜM YORUMLARDA',540,1664,40,'#fff',0);ctx.restore();}};
SCN.length=0;SCN.push(_A,_B,_C,_D,K_CLOCK,H_HASAN,I_CARDS);

