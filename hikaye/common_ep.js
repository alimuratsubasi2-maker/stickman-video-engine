/* ===== Bölümler arası ortak yardımcılar (assemble.py her bölüme ekler) ===== */
function mustache(h,s=1){stroke([[h[0]-30*s,h[1]+14*s],[h[0]-14*s,h[1]+7*s],[h[0],h[1]+12*s]],6,'#2a1a10');stroke([[h[0],h[1]+12*s],[h[0]+14*s,h[1]+7*s],[h[0]+30*s,h[1]+14*s]],6,'#2a1a10');}
function simitTray(x,y,sc=1){ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);rbox(-100,0,200,16,'#b8bcc6',8,4);
 for(let i=0;i<5;i++){const cx=-60+i*30,cy=-10-(i%2)*6;ctx.beginPath();ctx.ellipse(cx,cy,24,15,0,0,7);ctx.lineWidth=10;ctx.strokeStyle='#c9812e';ctx.stroke();ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.stroke();}
 for(let i=0;i<4;i++){const cx=-45+i*30;ctx.beginPath();ctx.ellipse(cx,-28,24,15,0,0,7);ctx.lineWidth=10;ctx.strokeStyle='#d99a45';ctx.stroke();}
 ctx.restore();}
function simitRing(x,y,rot=0,sc=1){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);ctx.beginPath();ctx.ellipse(0,0,24,15,0,0,7);ctx.lineWidth=10;ctx.strokeStyle='#c9812e';ctx.stroke();ctx.lineWidth=2;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();}
function hasan(x,o={}){const s=o.s||1.4,P0=P({x,y:(o.y!==undefined?o.y:(o.floor||FL)-202*s),pl:1,...(o.p||{})});
 const r=figure(P0,{f:o.f||1,s,floor:o.floor||FL,head:'#e6e3de',limb:'#aeb3bb',torso:'#6b8a9a',leg:'#343a4a',cap:'#d8cfa8',shadow:o.shadow});mustache(r.head,s*.96);return r;}
function epTitle(gt,l1,l2,n){const a=gt<4?1:clamp(1-(gt-4)/.8);if(a<=0)return;ctx.save();ctx.globalAlpha=a;txt(l1,540,330,l1.length>9?112:128);if(l2)txt(l2,540,470,l2.length>9?92:128,'#ffb02e');rbox(380,560,320,92,'#e53a3a',20,0);txt('BÖLÜM '+n,540,607,60,'#fff',0);ctx.restore();}
function makeCards(si,labs,wiggle){return (lt,D,gt)=>{skyGrad('#07091a','#141a3a');stars(.7,50);skyline(.3,'#0b1030');ground('#0a0e22');
 const tA=wordT(si,/^A,/),tB=wordT(si,/^B,/);
 const card=(x,y,col,L,l1,l2,t0)=>{if(gt<t0-.1)return;const k=E.back(clamp((gt-t0)/.35));ctx.save();ctx.translate(x,y);ctx.scale(k,k);rbox(-250,-130,500,260,'#121a38',34,6);ctx.beginPath();ctx.roundRect(-250,-130,500,260,34);ctx.lineWidth=9;ctx.strokeStyle=col;ctx.stroke();circ(-170,0,52,col,0);txt(L,-170,3,70,'#fff',0);txt(l1,50,-30,56,'#fff',0);txt(l2,50,38,44,col,0);ctx.restore();};
 card(540,1180,'#3dd68c','A',labs[0],labs[1],tA);card(540,1470,'#ff5a5a','B',labs[2],labs[3],tB);
 wiggle(lt);txt('?',150,FL-700,120,'#ffb02e',10);
 const tE=wordT(si,/^en$/);if(gt>tE-.2){const k=clamp((gt-tE)/.4);ctx.save();ctx.globalAlpha=k;rbox(250,1620,580,86,'#e53a3a',22,0);txt((typeof TL_END!=='undefined'?TL_END:((typeof TL_NEXT!=='undefined'?TL_NEXT:'SONRAKİ')+' BÖLÜM YORUMLARDA')),540,1664,40,'#fff',0);ctx.restore();}};}
