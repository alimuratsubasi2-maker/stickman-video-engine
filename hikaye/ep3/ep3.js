/* ===== Bölüm 3 · Gemiye Çıkış ===== */
var GROUPS=[[0,1],[2],[3],[4],[5],[6],[7]];
TL_NEXT='4.';
function shipInside(t){ctx.fillStyle='#cdd7e6';ctx.fillRect(-100,-100,W+200,H+200);ctx.fillStyle='#aab6cc';ctx.fillRect(-100,FL-20,W+200,H);stroke([[-100,FL-20],[W+100,FL-20]],6,INK);
 for(let i=0;i<4;i++){rbox(60+i*250,480,170,120,'#e9eef7',20,5);}
 for(const x of [180,540,900]){circ(x,1000,110,'#0b1030',10);stars(0,0);ctx.save();ctx.beginPath();ctx.arc(x,1000,104,0,7);ctx.clip();ctx.fillStyle='#fff';for(let k=0;k<8;k++)ctx.fillRect(x-90+rn(k+x)*180,910+rn(k+9+x)*180,4,4);ctx.restore();}
 const g=.5+.5*Math.sin(t*2);ctx.fillStyle=`rgba(120,220,255,${.35+.25*g})`;ctx.fillRect(0,300,W,24);ctx.fillRect(0,330,W,10);}
function zorg(x,t,sc=1.5,f=-1,o={}){alien(x,FL-20,sc,t,{f,arm:o.arm||0});}
function cloud(x,y,s=1){ctx.save();ctx.translate(x,y);ctx.scale(s,s);ctx.beginPath();for(const [cx,cy,r] of [[-90,10,70],[-30,-45,80],[50,-40,75],[100,15,65],[0,30,85]]){ctx.moveTo(cx+r,cy);ctx.arc(cx,cy,r,0,7);}ctx.fillStyle='#fff';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();}
const E3_S0=(lt,D,gt)=>{const t1=TL.sent[1].start-SC[0].a;
 if(lt<t1){const p=clamp(lt/t1),sc=lerp(1,.32,E.io(p));skyGrad('#060818','#16204a');stars(1,70);
  ctx.save();ctx.translate(540,FL);ctx.scale(sc,sc);ctx.translate(-540,-FL);skyline(.9,'#0b1030',FL);ctx.restore();ctx.fillStyle='#0a0e22';ctx.fillRect(-100,FL,W+200,H);
  saucer(540,lerp(240,220,p),2.0,lt,900);
  const y=lerp(FL-240,820,E.io(p));hasan(540,{s:1.15,y:y,shadow:false,p:{pl:0,lLu:6*Math.sin(lt*3),lLl:-4,lRu:-6*Math.sin(lt*3),lRl:-4,aLu:-140,aLl:-150,aRu:140,aRl:150,eye:1,mo:.6}});
  epTitle(gt,'GEMİYE','ÇIKIŞ',3);}
 else{shipInside(lt);const o=clamp((lt-t1)/.6);hasan(540,{s:1.15,floor:FL-20,p:{eye:.9,yaw:Math.sin(lt*1.3),sm:.2}});ctx.fillStyle=`rgba(255,255,255,${1-o})`;ctx.fillRect(0,0,W,H);}};
const E3_S1=(lt,D,gt)=>{shipInside(lt);hasan(280,{s:1.2,floor:FL-20,p:{eye:.9,mo:.3}});zorg(760,lt,1.5);
 const a=clamp((lt-1.0)/.4);if(a>0){ctx.save();ctx.globalAlpha=a;rbox(530,1730,460,84,'#12183a',22,0);txt('KOMUTAN ZORG',760,1773,44,'#9bd68f',0);ctx.restore();}};
const E3_S2=(lt,D,gt)=>{shipInside(lt);hasan(250,{s:1.2,floor:FL-20,p:{eye:.9,mo:.3}});zorg(780,lt,1.5,-1,{arm:-20});
 const gl=.5+.5*Math.sin(lt*6);ctx.save();ctx.translate(690,FL-20-1.5*190);rbox(-34,-54,68,108,'#10331f',12,6);ctx.fillStyle=`rgba(61,214,140,${.5+.4*gl})`;ctx.fillRect(-24,-44,48,60);circ(0,36,8,GRN_(),0);ctx.restore();
 const k=E.back(clamp((lt-.8)/.4));ctx.save();ctx.translate(540,1130);ctx.scale(k,k);rbox(-400,-130,800,260,'#fff',40,6);txt('Neden birbirinizle',0,-42,68,'#111',0);txt('savaşıyorsunuz?',0,46,68,'#111',0);ctx.restore();};
function GRN_(){return '#3dd68c';}
const E3_S3=(lt,D,gt)=>{shipInside(lt);const sw=Math.sin(lt*3.0);hasan(540,{s:1.4,floor:FL-20,p:{hd:8*sw,aRu:160,aRl:150+10*Math.sin(lt*9),eye:.7,mo:.2,sm:-.3}});
 cloud(220,1040,1.0);ctx.save();ctx.translate(220,1030);circ(0,0,70,'#1a2a50',6);stroke([[-40,-30],[-5,0],[-20,25],[20,50]],6,'#ff5a5a');ctx.restore();txt('DÜRÜST?',220,1190,50,'#fff',9);
 cloud(860,1040,1.0);ctx.save();ctx.translate(860,1030);circ(0,0,70,'#2d8fd8',6);ctx.fillStyle='#3da35d';ctx.beginPath();ctx.ellipse(-15,-10,28,36,.4,0,7);ctx.fill();ctx.restore();for(const [dx,dy] of [[-90,-70],[90,-60],[60,90]])txt('✦',860+dx,1030+dy,36,'#ffd36b',0);txt('GÜZEL?',860,1190,50,'#fff',9);};
const E3_S4=(lt,D,gt)=>{shipInside(lt);hasan(220,{s:1.2,floor:FL-20,p:{eye:.9,mo:.3,hd:-6}});zorg(840,lt,1.4);
 const t=TL.sent[5].start,on=gt>t+.5;const gl=.5+.5*Math.sin(lt*7);
 ctx.save();ctx.translate(540,1150);rbox(-190,-300,380,600,'#18203a',50,8);ctx.fillStyle=on?`rgba(61,214,140,${.55+.35*gl})`:'#2a3a6a';ctx.beginPath();ctx.roundRect(-150,-250,300,300,30);ctx.fill();
 if(on){ctx.beginPath();ctx.arc(0,-100,90+10*gl,0,7);ctx.lineWidth=8;ctx.strokeStyle='#fff';ctx.stroke();}
 txt('YALAN',0,130,50,'#fff',0);txt('TESPİTİ',0,190,50,'#ffb02e',0);ctx.restore();
 if(on){ctx.save();ctx.globalAlpha=.5*gl;const g2=ctx.createRadialGradient(540,1050,20,540,1050,520);g2.addColorStop(0,'rgba(61,214,140,.8)');g2.addColorStop(1,'rgba(61,214,140,0)');ctx.fillStyle=g2;ctx.fillRect(0,600,W,900);ctx.restore();}
 const u=(lt*1.1)%1;sweat(300,1130+u*60,1.1,1-u);};
const E3_S5=(lt,D,gt)=>{skyGrad('#0a0e22','#1a2a50');const br=Math.sin(lt*1.3),open=lt>D-1.2;
 hasan(540,{s:2.6,y:FL-202*2.6+6*br,floor:FL,shadow:false,p:{tl:2*br,eye:1,mo:open?1:0,sm:-.1,aLu:12+6*br,aRu:-12-6*br}});
 for(let i=0;i<2;i++){const u=((lt*.8+i*.5)%1);sweat(420+i*220,640+u*90,1.6,1-u);}};
const E3_S6=makeCards(7,['DÜRÜST','OLSUN','GÜZEL','GÖSTERSİN'],(lt)=>{hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E3_S0,E3_S1,E3_S2,E3_S3,E3_S4,E3_S5,E3_S6);
