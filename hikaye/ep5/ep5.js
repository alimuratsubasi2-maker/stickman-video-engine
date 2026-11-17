/* ===== Bölüm 5 · Birinci Sınav: Paylaşmak ===== */
var GROUPS=[[0,1],[2],[3],[4],[5],[6],[7]];
TL_NEXT='6.';
function bread(x,y,sc=1,rot=0){ctx.save();ctx.translate(x,y);ctx.rotate(rot);ctx.scale(sc,sc);ctx.beginPath();ctx.ellipse(0,0,150,70,0,0,7);ctx.fillStyle='#d9a35f';ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=INK;ctx.stroke();for(const dx of [-70,0,70])stroke([[dx-18,-40],[dx+18,20]],8,'#a8742e');ctx.restore();}
function kid(x,t,sc,o={}){alien(x,FL-20,sc,t+x,{f:o.f||1,arm:Math.sin(t*2+x)*6});}
const E5_S0=(lt,D,gt)=>{shipInside(lt);hasan(240,{s:1.2,floor:FL-20,p:{eye:.7,mo:0}});zorg(760,lt,1.5);notebook(930,FL-20-60,.45,.2);
 const t1=TL.sent[1].start-SC[0].a;if(lt>t1){const k=clamp((lt-t1)/1.2);for(let i=0;i<10;i++){const x=lerp(1500,380+i*70,E.out(clamp((lt-t1)/1.6-i*.08)));kid(x,lt,.52);}}
 epTitle(gt,'PAYLAŞMAK',null,5);};
const E5_S1=(lt,D,gt)=>{shipInside(lt);const gl=ctx.createRadialGradient(540,1250,10,540,1250,420);gl.addColorStop(0,'rgba(255,230,150,.9)');gl.addColorStop(1,'rgba(255,230,150,0)');ctx.fillStyle=gl;ctx.fillRect(0,800,W,900);
 rbox(260,1330,520,40,'#8a93a6',16,6);const k=E.back(clamp(lt/.6));bread(540,1290,1.4*k);
 txt('1',540,1100,200,'#ffb02e',14);};
const E5_S2=(lt,D,gt)=>{shipInside(lt);hasan(250,{s:1.2,floor:FL-20,p:{eye:.8,mo:.2}});zorg(780,lt,1.5,-1,{arm:-20});rbox(300,FL-20-120,260,30,'#8a93a6',12,5);bread(430,FL-20-155,.5);
 const k=E.back(clamp((lt-.6)/.4));ctx.save();ctx.translate(540,1130);ctx.scale(k,k);rbox(-400,-130,800,260,'#fff',40,6);txt('Bu ekmeği nasıl',0,-42,68,'#111',0);txt('paylaştırırsın?',0,46,68,'#111',0);ctx.restore();};
const E5_S3=(lt,D,gt)=>{shipInside(lt);hasan(130,{s:1.1,floor:FL-20,p:{eye:.8,hd:-4}});for(let i=0;i<10;i++){const sc=.62-.02*i;kid(300+i*72,lt,sc,{f:-1});}
 bread(540,1000,.8);for(let i=0;i<10;i++){const u=(lt*.5+i*.1)%1;ctx.save();ctx.globalAlpha=.7*(1-u);ctx.strokeStyle='#ffd36b';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(300+i*72,FL-20-300);ctx.lineTo(540,1030);ctx.stroke();ctx.restore();}};
const E5_S4=(lt,D,gt)=>{shipInside(lt);const sp=clamp(lt/2.5);hasan(540,{s:1.5,floor:FL-20,p:{eye:.7,aRu:lerp(12,60,E.io(clamp(lt/.8))),aRl:lerp(6,120,E.io(clamp(lt/.8))),mo:0}});
 const split=clamp((lt-2.0)/1.2);if(split<=0){bread(640,FL-20-420,.7);}else{for(let i=0;i<10;i++){const a=i/10*6.28;bread(640+Math.cos(a)*split*190,FL-20-480+Math.sin(a)*split*130,.22,a);}}
 if(split>.8){txt('10',880,1060,160,'#ff5a5a',12);}};
const E5_S5=(lt,D,gt)=>{skyGrad('#0a0e22','#1a2a50');stars(.7,50);
 const rule=(y,t0,l1,l2)=>{const k=E.back(clamp((lt-t0)/.4));ctx.save();ctx.translate(540,y);ctx.scale(k,k);rbox(-440,-110,880,220,'#121a38',34,6);circ(-340,0,60,'#3dd68c',0);stroke([[-368,2],[-346,26],[-304,-24]],14,'#fff');txt(l1,90,-26,60,'#fff',0);txt(l2,90,40,50,'#ffb02e',0);ctx.restore();};
 rule(1150,.6,'HERKES','AYNI ANDA YESİN');rule(1450,2.0,'KAVGA','KESİNLİKLE YOK');};
const E5_S6=makeCards(7,['EŞİT','BÖL','ÖNCE','KÜÇÜKLERE'],(lt)=>{hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E5_S0,E5_S1,E5_S2,E5_S3,E5_S4,E5_S5,E5_S6);
