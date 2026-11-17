/* ================= HİKAYE: UZAYLILAR GELSEYDİ? ================= */
const FL=1640, P=o=>({...BASE,...o});
const rn=i=>{const v=Math.sin(i*127.1+311.7)*43758.5453;return v-Math.floor(v);};
function skyGrad(c1,c2,y1=FL){const g=ctx.createLinearGradient(0,0,0,y1);g.addColorStop(0,c1);g.addColorStop(1,c2);ctx.fillStyle=g;ctx.fillRect(-200,-200,W+400,y1+200);}
function stars(a=1,n=70){ctx.save();ctx.fillStyle='#fff';for(let i=0;i<n;i++){ctx.globalAlpha=a*(.35+.65*rn(i+9));ctx.beginPath();ctx.arc(rn(i)*W,rn(i+50)*900,1.2+2*rn(i+3),0,7);ctx.fill();}ctx.restore();}
function skyline(lit=1,col='#0c1230',base=FL,gt=0){for(let i=0;i<11;i++){const x=i*100-20,w=88+rn(i)*30,h=220+rn(i+5)*330;ctx.fillStyle=col;ctx.fillRect(x,base-h,w,h);
 for(let r=0;r<h/46-1;r++)for(let c=0;c<w/30;c++){if(rn(i*40+r*7+c)<.55*lit){ctx.fillStyle=rn(i+r*3+c)<.1?'#fff3b0':'#ffd36b';ctx.globalAlpha=.55+.4*rn(r+c*5);ctx.fillRect(x+10+c*28,base-h+22+r*46,13,20);ctx.globalAlpha=1;}}}
 ctx.fillStyle=col;ctx.fillRect(-100,base-10,W+200,H);}
function ground(c1,c2){ctx.fillStyle=c1;ctx.fillRect(-100,FL,W+200,H-FL+100);stroke([[-100,FL],[W+100,FL]],4,c2||INK);}
function saucer(x,y,sc,t,beam,tilt=0){ctx.save();ctx.translate(x,y);ctx.rotate(tilt);ctx.scale(sc,sc);
 if(beam){const g=ctx.createLinearGradient(0,20,0,beam);g.addColorStop(0,'rgba(190,255,225,.5)');g.addColorStop(1,'rgba(190,255,225,0)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(-70,24);ctx.lineTo(70,24);ctx.lineTo(260,beam);ctx.lineTo(-260,beam);ctx.closePath();ctx.fill();}
 ctx.beginPath();ctx.ellipse(0,-18,62,50,0,Math.PI,0);ctx.fillStyle='rgba(150,225,255,.8)';ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=INK;ctx.stroke();
 ctx.beginPath();ctx.ellipse(0,0,175,44,0,0,7);ctx.fillStyle='#7d89a3';ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.ellipse(0,-6,150,20,0,Math.PI,0);ctx.strokeStyle='rgba(255,255,255,.35)';ctx.lineWidth=6;ctx.stroke();
 for(let i=0;i<7;i++){const on=Math.sin(t*5+i*1.3)>-.2;circ(-120+i*40,10+Math.abs(i-3)*-3,9,on?'#ffe27a':'#5e5420',3);}
 ctx.restore();}
function alien(x,y,sc,t,o={}){ctx.save();ctx.translate(x,y);ctx.scale(sc*(o.f||1),sc);
 const w=o.walk?Math.sin(t*9):0;
 const col=o.col||'#9bd68f';
 const parts=[[[0,-170],[-18+w*14,-90],[-14+w*22,0]],[[0,-170],[18-w*14,-90],[14-w*22,0]],[[0,-170],[0,-300]],[[0,-285],[-50,-215+(o.arm||0)],[-70,-160]],[[0,-285],[50,-215],[66,-165-(o.arm||0)]]];
 for(const p of parts)stroke(p,16,INK);for(const p of parts)stroke(p,8,col);
 ctx.beginPath();ctx.ellipse(0,-345,52,66,0,0,7);ctx.fillStyle=col;ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();
 const bl=(Math.sin(t*1.7)>.93)?.2:1;
 for(const sx of [-1,1]){ctx.save();ctx.translate(sx*24,-340);ctx.rotate(sx*-.45);ctx.beginPath();ctx.ellipse(0,0,15,26*bl,0,0,7);ctx.fillStyle='#0b0b0b';ctx.fill();ctx.restore();}
 stroke([[-9,-300],[9,-300]],4,INK);ctx.restore();}
function man(x,o={}){const s=o.s||1.4,P0=P({x,y:FL-202*s,pl:1,...(o.p||{})});
 const arms=[P0.aLu,P0.aLl,P0.aRu,P0.aRl];
 if(o.walk){P0.wk=1;walkApply(P0,o.t||0,o.spd||9);if(o.keepArms){P0.aLu=arms[0];P0.aLl=arms[1];P0.aRu=arms[2];P0.aRl=arms[3];}}
 return figure(P0,{f:o.f||1,s,floor:o.floor||FL,head:'#e6e3de',limb:'#aeb3bb',torso:o.shirt||'#4b5870',leg:o.pants||'#343a4a',cap:o.cap,hair:o.hair,shadow:o.shadow});}
function bubble(x,y,w,h,txt,fs=44){ctx.save();rbox(x-w/2,y-h/2,w,h,'#fff',26,5);ctx.beginPath();ctx.moveTo(x-18,y+h/2-2);ctx.lineTo(x-34,y+h/2+28);ctx.lineTo(x+8,y+h/2-2);ctx.fillStyle='#fff';ctx.fill();ctx.fillStyle=INK;ctx.font=`800 ${fs}px Arial`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(txt,x,y+2);ctx.restore();}
function txt(s,x,y,fs,col='#fff',st=10,font='900'){ctx.save();ctx.font=`${font} ${fs}px Arial, sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.lineJoin='round';if(st){ctx.lineWidth=st;ctx.strokeStyle='#000';ctx.strokeText(s,x,y);}ctx.fillStyle=col;ctx.fillText(s,x,y);ctx.restore();}
function vignette(){const g=ctx.createRadialGradient(540,900,350,540,960,1250);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.62)');ctx.fillStyle=g;ctx.fillRect(0,0,W,H);}

/* ---- zaman çizelgesi ---- */
let TL=null,CH=[],SC=[];
const KEY=/uzay|gemi|dört|saat|temsilci|\bnot\b|aradığ|komşu|çay|ekmeğ|istila|birleş|panik|kapkara|tek\b|^A,|^B,|ikinci|bölüm|yardım/i;
function setup(tl){TL=tl;CH=[];
 for(const s of tl.sent){let cur=null;const flush=()=>{if(cur){CH.push(cur);cur=null;}};
  const tok=s.text.split(/\s+/);const same=tok.length===s.words.length;for(const [w0,a,b] of s.words){const w=same?tok[s.words.findIndex(x=>x[1]===a)]:w0;const len=cur?cur.txt.length:0;
   if(cur&&(cur.w.length>=3||len+w.length>17||/[.,:?!]$/.test(cur.w[cur.w.length-1][0])))flush();
   if(!cur)cur={a,b,w:[],txt:''};cur.w.push([w,KEY.test(w)]);cur.txt+=(cur.txt?' ':'')+w;cur.b=b;}
  flush();}
 for(let i=0;i<CH.length;i++){const nx=CH[i+1];CH[i].e=nx&&nx.a-CH[i].b<.5?nx.a:CH[i].b+.28;}
 const st=i=>tl.sent[i].start-.3,groups=(typeof GROUPS!=='undefined'?GROUPS:[[0,1],[2],[3],[4],[5],[6,7],[8,9],[10],[11]]);
 SC=groups.map((g,k)=>({a:k?st(g[0]):0,b:groups[k+1]?st(groups[k+1][0]):tl.total}));}
function caption(gt){const c=CH.find(c=>gt>=c.a&&gt<c.e);if(!c)return;
 ctx.save();ctx.font='900 74px Arial, sans-serif';ctx.textBaseline='middle';
 const ws=c.w.map(([w])=>w),wd=ws.map(w=>ctx.measureText(w+' ').width),tot=wd.reduce((a,b)=>a+b,0)-ctx.measureText(' ').width;
 let x=540-tot/2;const y=860;ctx.textAlign='left';ctx.lineJoin='round';
 const k=clamp((gt-c.a)/.12),sc=.9+.1*E.back(k);ctx.translate(540,y);ctx.scale(sc,sc);ctx.translate(-540,-y);
 c.w.forEach(([w,hi],i)=>{ctx.lineWidth=14;ctx.strokeStyle='#000';ctx.strokeText(w,x,y);ctx.fillStyle=hi?'#ffb02e':'#fff';ctx.fillText(w,x,y);x+=wd[i];});ctx.restore();}
function wordT(si,rx){const s=TL.sent[si];const m=s.words.find(w=>rx.test(w[0]));return m?m[1]:s.start;}

/* ---- sahneler ---- */
const SCN=[
/* A · gökyüzü kapkara, gemiler */
(lt,D,gt)=>{const dark=clamp(lt/3.5);skyGrad(`rgb(${lerp(120,6,dark)|0},${lerp(165,9,dark)|0},${lerp(215,24,dark)|0})`,`rgb(${lerp(200,22,dark)|0},${lerp(215,28,dark)|0},${lerp(235,60,dark)|0})`);
 stars(dark);circ(860,330,55,'#f4f0d8',0);ctx.globalAlpha=.12*dark;circ(860,330,95,'#f4f0d8',0);ctx.globalAlpha=1;
 skyline(dark,'#0b1230');ground('#0a0e22');
 const e=E.out(clamp((lt-2.6)/3.2));
 saucer(250,lerp(-250,520,e),1.0,lt,0,-.08);saucer(560,lerp(-300,400,e),1.7,lt,e>.9?1500:0,0);saucer(870,lerp(-260,560,e),.9,lt,0,.07);
 man(230,{p:{hd:-28,eye:1,mo:.6,aRu:150,aRl:158},t:lt,shirt:'#5a4f6e'});man(380,{p:{hd:-24,eye:1,mo:.4},t:lt,f:1,shirt:'#3f6a5c'});
 if(lt<(D)){const a=gt<4?1:clamp(1-(gt-4)/.8);if(a>0){ctx.save();ctx.globalAlpha=a;txt('UZAYLILAR',540,330,128);txt('GELSEYDİ?',540,470,128,'#ffb02e');rbox(380,560,320,92,'#e53a3a',20,0);txt('BÖLÜM 1',540,607,60,'#fff',0);ctx.restore();}}},
/* B · panik */
(lt,D,gt)=>{skyGrad('#10152e','#2b2240');stars(.7,40);saucer(540,250,1.5,lt,0);skyline(.7,'#0f1430',FL-40);ground('#14172b');
 rbox(40,1150,340,490,'#2b2030',10,5);for(let r=0;r<3;r++){stroke([[55,1290+r*110],[365,1290+r*110]],8,INK);if(r<2)for(let c=0;c<3;c++)if(rn(r*3+c)<.4)rbox(75+c*90,1250+r*110,40,40,'#d9a35f',6,3);}
 ctx.save();ctx.globalAlpha=.85;rbox(40,1100,340,50,'#e5b23a',8,5);ctx.restore();
 for(let i=0;i<5;i++){const x=420+i*135,y=FL-70;rbox(x,y,115,60,i%2?'#9b3b3b':'#3b6b9b',14,4);circ(x+25,y+62,14,'#222',3);circ(x+92,y+62,14,'#222',3);const bk=Math.sin(lt*7+i)>0;circ(x+108,y+24,7,bk?'#ff3b3b':'#6b1f1f',0);}
 for(let i=0;i<6;i++){const dir=i%2?1:-1,x=((rn(i)*1400+dir*260*lt*(.7+.2*rn(i+4)))%1500+1500)%1500-200;man(x,{walk:1,t:lt*1.7+i,spd:16,f:dir,s:1.2,keepArms:true,p:{aLu:150+i*3,aLl:160,aRu:-150,aRl:-160,mo:1,eye:1},shirt:['#6b4b4b','#4b6b5a','#5a4b6b','#6b6b4b','#4b5e6b','#6b4b5e'][i]});}
 const bl=Math.sin(lt*6)>0;ctx.save();ctx.translate(780,520);ctx.rotate(-.1);rbox(-70,-120,140,240,'#1c2233',22,6);rbox(-56,-100,112,200,'#0e1220',12,0);
 for(let k=0;k<4;k++)rbox(-30+k*16,20-k*16,10,14+k*16,'#8a93a6',2,0);stroke([[-60,-90],[60,90]],10,bl?'#ff4a4a':'#a82a2a');ctx.restore();},
/* C · ültimatom */
(lt,D,gt)=>{skyGrad('#07091a','#1a2148');stars(1,60);skyline(.8,'#0b1030',FL);ground('#0a0e22');
 saucer(540,360,2.1,lt,1100);
 const secs=lerp(86400,86400-52,clamp(lt/D)),hh=(secs/3600|0),mm=((secs%3600)/60|0),ss=(secs%60|0);
 const clock=[hh,mm,ss].map(v=>String(v).padStart(2,'0')).join(':');
 ctx.save();ctx.font='900 150px "Courier New", monospace';ctx.textAlign='center';ctx.textBaseline='middle';ctx.shadowColor='#ff2b2b';ctx.shadowBlur=30;ctx.fillStyle='#ff4d4d';ctx.fillText(clock,540,660);ctx.restore();
 const t1=wordT(3,/^Yirmi/);if(gt>t1-.2){const k=E.back(clamp((gt-t1)/.3));ctx.save();ctx.translate(300,1090);ctx.scale(k,k);rbox(-190,-60,380,120,'#1b2346',26,5);circ(-115,0,40,'#fff',5);stroke([[-115,0],[-115,-22]],6,INK);stroke([[-115,0],[-98,8]],6,INK);txt('24 SAAT',45,2,50,'#fff',0);ctx.restore();}
 const t2=wordT(3,/^temsilci/);if(gt>t2-.2){const k=E.back(clamp((gt-t2)/.3));ctx.save();ctx.translate(790,1090);ctx.scale(k,k);rbox(-190,-60,380,120,'#1b2346',26,5);circ(-120,-12,17,'#fff',4);stroke([[-120,5],[-120,40]],10,'#fff');stroke([[-143,24],[-97,24]],10,'#fff');txt('1 TEMSİLCİ',50,2,42,'#ffb02e',0);ctx.restore();}
 man(190,{p:{hd:-26,eye:1,mo:.5},t:lt,shirt:'#5a4f6e'});man(880,{p:{hd:-22,eye:.9},t:lt,f:-1,shirt:'#3f6a5c'});},
/* D · liderler */
(lt,D,gt)=>{ctx.fillStyle='#2a1f1c';ctx.fillRect(-100,-100,W+200,H+200);for(let i=0;i<14;i++){ctx.fillStyle=i%2?'#33261f':'#2d211b';ctx.fillRect(i*80,0,80,H);}
 rbox(100,300,230,300,'#1a2236',12,6);circ(215,420,50,'#fff6c8',3);stroke([[215,300],[215,600]],5,INK);
 rbox(700,330,260,200,'#3a3a46',10,6);for(let i=0;i<6;i++)stroke([[730+i*38,350],[730+i*38,510]],4,'rgba(255,255,255,.25)');
 ctx.fillStyle='#17110f';ctx.fillRect(-100,FL-60,W+200,H);
 const xs=[150,400,680,930];
 xs.forEach((x,i)=>{const arg=Math.sin(lt*3.2+i*1.9),up=arg>0;
  const p=P({x,y:1545,pl:1,tl:(x<540?1:-1)*4*arg,hd:6*arg,hLw:1,hRw:1,hLx:x+10,hLy:1530,hRx:x+(up?30:-5),hRy:up?1340:1530,mo:.55+.45*Math.abs(arg),eye:.7,flx:-20,frx:20});
  figure(p,{f:x<540?1:-1,s:1.05,floor:1900,head:'#e6e3de',limb:'#aeb3bb',torso:['#2d3550','#503030','#2f4b3b','#4b3b5a'][i],leg:'#222',shadow:false,hair:i%2?'tuft':undefined,cap:i==2?'#6b6b6b':undefined});
  if(up){bubble(x+(x<540?90:-90),1290,90,70,['!','?!','!!','?'][i],46);}});
 rbox(40,1580,1000,48,'#6b4a2c',8,5);rbox(70,1628,940,70,'#583b22',6,5);
 circ(540,1530,52,'#2d6fb3',5);ctx.save();ctx.beginPath();ctx.arc(540,1530,50,0,7);ctx.clip();ctx.fillStyle='#3da35d';ctx.beginPath();ctx.ellipse(525,1520,22,28,.4,0,7);ctx.ellipse(560,1545,14,18,0,0,7);ctx.fill();ctx.restore();},
/* E · apartman */
(lt,D,gt)=>{skyGrad('#101830','#2a2f55');skyline(.5,'#0c1230',FL);ground('#0a0e22');
 rbox(60,930,960,740,'#2c2433',10,7);
 for(let k=0;k<3;k++){const y0=950+k*238,fy=y0+215,d=k*1.3,a=lt-d-.3;
  ctx.fillStyle=['#4a3a36','#3a4a4a','#4a3a4f'][k];ctx.fillRect(76,y0,928,218);stroke([[76,fy+4],[1004,fy+4]],6,INK);
  rbox(120,y0+36,150,110,'#1b2646',6,5);stroke([[195,y0+36],[195,y0+146]],4,INK);
  const open=clamp((a-3.3)/.5),dx=860;
  rbox(dx-45,fy-170,90,170,open>0?'#ffe9a8':'#6b4a2c',4,5);
  if(open>0){ctx.beginPath();ctx.moveTo(dx-45,fy-170);ctx.lineTo(dx-45+60*open,fy-165);ctx.lineTo(dx-45+60*open,fy-8);ctx.lineTo(dx-45,fy);ctx.closePath();ctx.fillStyle='#6b4a2c';ctx.fill();ctx.lineWidth=5;ctx.strokeStyle=INK;ctx.stroke();}
  const vx=lerp(150,740,clamp(a/2.8));const walking=a>0&&a<2.8;
  const knock=a>2.8&&a<3.5?Math.sin(a*24):0;
  const give=clamp((a-3.8)/.5);
  const pv=P({x:vx,y:fy-111,pl:1,aRu:lerp(12,70,give)+knock*14,aRl:lerp(6,80,give)+knock*10,eye:.3,sm:give>.2?1:0});
  if(walking){pv.wk=1;walkApply(pv,lt*1.2+k,8);}
  if(a>-1){figure(pv,{f:1,s:.55,floor:fy,head:'#e6e3de',limb:'#aeb3bb',torso:['#4b5870','#6b4b4b','#4b6b5a'][k],leg:'#343a4a',shadow:false});
   if(give>0.4){const ix=vx+60+give*50,iy=fy-135;if(k==1){ctx.beginPath();ctx.ellipse(ix,iy,30,15,0,0,7);ctx.fillStyle='#d9a35f';ctx.fill();ctx.lineWidth=4;ctx.strokeStyle=INK;ctx.stroke();}else{ctx.beginPath();ctx.moveTo(ix-12,iy-18);ctx.lineTo(ix+12,iy-18);ctx.lineTo(ix+8,iy+10);ctx.lineTo(ix-8,iy+10);ctx.closePath();ctx.fillStyle='#c0542e';ctx.fill();ctx.lineWidth=3.5;ctx.strokeStyle=INK;ctx.stroke();stroke([[ix-18,iy+14],[ix+18,iy+14]],4,'#eee');}}}
  if(open>.5){const oc=P({x:dx+10,y:fy-111,pl:1,sm:1,eye:.4,aLu:give*-70,aLl:give*-70});figure(oc,{f:-1,s:.55,floor:fy,head:'#e6e3de',limb:'#aeb3bb',torso:['#6b6b4b','#4b5e6b','#6b4b5e'][k],leg:'#343a4a',shadow:false});}
 }},
/* F · uzaylı ve not */
(lt,D,gt)=>{const a=gt-TL.sent[6].start;skyGrad('#060818','#161c40');stars(1,60);skyline(.45,'#0a0f28',FL);ground('#0a0e22');
 saucer(760,300,1.7,lt,FL,0);
 man(300,{p:{hd:-18,eye:1,mo:.4},t:lt,shirt:'#4b5870'});
 const e=clamp(a/2.2),walk=clamp((a-2.4)/1.4),back=clamp((a-5.2)/1.6);
 let ax=lerp(760,500,E.io(walk)),ay=lerp(300,FL,E.out(e));
 if(back>0){ax=lerp(500,760,E.io(back));ay=lerp(FL,300,E.in(clamp((back-.45)/.55)));}
 if(a>-.5&&!(back>.99))alien(ax,ay,1.0,lt,{f:back>0?1:-1,walk:(walk>0&&walk<1)||(back>0&&back<.45),arm:Math.sin(lt*3)*10});
 if(a>3.8)rbox(430,FL-26,54,22,'#f1ead0',4,3.5);
 const t7=TL.sent[7].start;if(gt>t7-.1){const k=E.back(clamp((gt-t7)/.35));ctx.save();ctx.translate(540,1230);ctx.rotate(-.04);ctx.scale(k,k);ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=30;rbox(-330,-170,660,340,'#efe6c8',10,6);ctx.shadowBlur=0;
  txt('TEŞEKKÜRLER.',0,-60,72,'#2a2a2a',0);txt('ARADIĞIMIZI BULDUK.',0,40,56,'#a8321f',0);for(let i=0;i<5;i++)circ(-130+i*65,120,7+(i%2)*4,null,4);ctx.restore();}},
/* G · gemiler gidiyor + meğer */
(lt,D,gt)=>{const dawn=clamp(lt/6);skyGrad(`rgb(${lerp(12,255,dawn)|0},${lerp(16,170,dawn)|0},${lerp(40,120,dawn)|0})`,`rgb(${lerp(22,255,dawn)|0},${lerp(30,220,dawn)|0},${lerp(60,150,dawn)|0})`);
 stars(1-dawn);const sun=lerp(1200,760,E.out(dawn));circ(300,sun,120,'#fff2b0',0);
 skyline(lerp(.45,.1,dawn),'#2a2438');ground('#241f30');
 const up=E.in(clamp(lt/3.4));saucer(250,lerp(520,-300,up),1.0*(1-.4*up),lt,0,-.08);saucer(560,lerp(400,-400,clamp(up*1.05)),1.7*(1-.5*up),lt,0,0);saucer(870,lerp(560,-300,up),.9,lt,0,.07);
 const t9=TL.sent[9].start;if(gt>t9-.2){const k=E.back(clamp((gt-t9+.2)/.4));ctx.save();ctx.translate(800,470);ctx.scale(k,k);circ(0,0,170,'#0d1426',8);ctx.save();ctx.beginPath();ctx.arc(0,0,164,0,7);ctx.clip();alien(0,230,1.15,lt,{f:1});ctx.restore();ctx.restore();}
 const g=clamp((gt-t9)/1.2);if(gt>t9-.2){man(330,{p:{sm:1,eye:.4,aRu:50,aRl:70},t:lt,f:1,shirt:'#4b6b5a'});man(520,{p:{sm:1,eye:.4,aLu:-40,aLl:-60},t:lt,f:-1,shirt:'#6b4b4b'});rbox(400,FL-120,60,10,'#7a5a36',3,0);}},
/* H · ertesi gün */
(lt,D,gt)=>{skyGrad('#59616f','#8b92a0');skyline(0,'#4a5160');ground('#3d424d');
 const x1=lerp(-120,1200,clamp(lt/D)),x2=lerp(1200,-120,clamp(lt/D));
 man(x1,{walk:1,t:lt,spd:7,f:1,p:{hd:22,aRu:60,aRl:100,eye:0},shirt:'#4b5870'});man(x2,{walk:1,t:lt+1,spd:7,f:-1,p:{hd:22,aRu:60,aRl:100,eye:0},shirt:'#6b4b4b'});
 for(const [px,pf] of [[x1+68,1],[x2-68,-1]])rbox(px-10,FL-330,20,34,'#222',4,3);
 const f3=P({x:880,y:FL-211,pl:1,hd:0,eye:0,sm:-.6});figure(f3,{f:-1,s:1.05,floor:FL,head:'#e6e3de',limb:'#aeb3bb',torso:'#3f6a5c',leg:'#343a4a'});
 ctx.fillStyle='rgba(0,0,0,.18)';for(let i=0;i<3;i++)txt('...',x1+80+i*0,FL-420,50,'#fff',0);},
/* I · A/B */
(lt,D,gt)=>{skyGrad('#07091a','#141a3a');stars(.7,50);skyline(.3,'#0b1030');ground('#0a0e22');
 const tA=wordT(11,/^A,/),tB=wordT(11,/^B,/);
 const card=(x,y,col,L,l1,l2,t0)=>{if(gt<t0-.1)return;const k=E.back(clamp((gt-t0)/.35));ctx.save();ctx.translate(x,y);ctx.scale(k,k);rbox(-230,-150,460,300,'#121a38',34,6);ctx.beginPath();ctx.roundRect(-230,-150,460,300,34);ctx.lineWidth=9;ctx.strokeStyle=col;ctx.stroke();circ(-150,-85,52,col,0);txt(L,-150,-82,70,'#fff',0);txt(l1,50,-20,56,'#fff',0);txt(l2,50,50,46,col,0);ctx.restore();};
 card(540,1180,'#3dd68c','A','EVET','BİRLEŞİRDİK',tA);card(540,1480,'#ff5a5a','B','HAYIR','YİNE KAVGA',tB);
 man(160,{p:{hd:8,sm:0,eye:.3,aRu:140,aRl:150},t:lt,shirt:'#4b5870'});txt('?',160,FL-700,120,'#ffb02e',10);
 const tE=wordT(11,/^en$/);if(gt>tE-.2){const k=clamp((gt-tE)/.4);ctx.save();ctx.globalAlpha=k;rbox(250,1620,580,86,'#e53a3a',22,0);txt('2. BÖLÜM YORUMLARDA',540,1664,40,'#fff',0);ctx.restore();}},
];

/* ---- ana çizim ---- */
function drawStory(t){
 let k=SC.findIndex(s=>t>=s.a&&t<s.b);if(k<0)k=SC.length-1;const s=SC[k],lt=t-s.a,D=s.b-s.a;
 ctx.save();const z=1+.05*clamp(lt/D);ctx.translate(540,1150);ctx.scale(z,z);ctx.translate(-540,-1150);
 SCN[k](lt,D,t);ctx.restore();
 vignette();
 const fi=clamp(lt/.35),fo=clamp((D-lt)/.3);ctx.fillStyle=`rgba(0,0,0,${1-Math.min(fi,fo)})`;ctx.fillRect(0,0,W,H);
 caption(t);
}


