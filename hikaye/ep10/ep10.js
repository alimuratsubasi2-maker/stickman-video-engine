/* ===== Bölüm 10 · Aradığımızı Bulduk (SEZON FİNALİ) ===== */
var GROUPS=[[0],[1],[2],[3],[4],[5],[6],[7]];
TL_NEXT='SEZON';var TL_END='YENİ SEZON YORUMLARDA';
const E10_S0=(lt,D,gt)=>{shipInside(lt);const br=Math.sin(lt*1.5);hasan(540,{s:2.2,y:FL-20-202*2.2+4*br,floor:FL-20,shadow:false,p:{eye:.7,mo:.5+.4*Math.abs(Math.sin(lt*6)),aRu:50,aRl:150}});mic(700,1280,1.2,-.3);
 for(let i=0;i<4;i++){const u=((lt*.7+i/4)%1);ctx.save();ctx.globalAlpha=(1-u)*.7;ctx.strokeStyle='#ffd36b';ctx.lineWidth=6;ctx.beginPath();ctx.arc(540,1050,150+u*500,0,7);ctx.stroke();ctx.restore();}
 epTitle(gt,'ARADIĞIMIZI','BULDUK',10);};
const E10_S1=(lt,D,gt)=>{shipInside(lt);hasan(260,{s:1.3,floor:FL-20,p:{eye:.6,sm:.8,aRu:50,aRl:150}});mic(400,FL-20-1.3*330,.9,-.3);
 const k=E.back(clamp((lt-.5)/.4));ctx.save();ctx.translate(560,1100);ctx.scale(k,k);rbox(-430,-150,860,300,'#fff',40,6);txt('Onlar zarar vermeye',0,-70,62,'#111',0);txt('gelmedi.',0,-10,62,'#111',0);txt('Sadece bir ev arıyorlar.',0,70,60,'#3a6bd0',0);ctx.restore();};
const E10_S2=(lt,D,gt)=>{skyGrad(`rgb(${lerp(30,255,clamp(lt/6))|0},${lerp(30,190,clamp(lt/6))|0},${lerp(70,150,clamp(lt/6))|0})`,`rgb(${lerp(60,255,clamp(lt/6))|0},${lerp(60,220,clamp(lt/6))|0},${lerp(100,170,clamp(lt/6))|0})`);skyline(.3,'#2a2438',FL);ground('#241f30');
 const a=E.io(clamp((lt-1.2)/2.5));for(let i=0;i<7;i++){missile(120+i*140,FL-150,lerp(-.3+i*.1,Math.PI*.9+i*.02,a),.9);}
 for(const [x,c] of [[200,'#4b6b4b'],[420,'#6b4b4b'],[660,'#4b5e6b'],[880,'#6b6b4b']]){man(x,{s:1.15,p:{eye:.2,ec:a>.5?1:0,sm:a>.5?1:0,hd:-6*a,aRu:12,aRl:6},t:lt,shirt:c});}
 if(a>.6){ctx.save();ctx.globalAlpha=Math.sin((a-.6)/.4*Math.PI);for(let i=0;i<5;i++)ctx.fillStyle='#fff';txt('HHHH...',540,1010,90,'#ffffffcc',10);ctx.restore();}};
const E10_S3=(lt,D,gt)=>{shipInside(lt);hasan(250,{s:1.25,floor:FL-20,p:{sm:1,eye:.5}});zorg(780,lt,1.5,-1,{arm:-30});
 const t=E.back(clamp((lt-1.0)/.4));ctx.save();ctx.translate(540,1150);ctx.rotate(-.04);ctx.scale(t,t);ctx.shadowColor='rgba(0,0,0,.5)';ctx.shadowBlur=30;rbox(-330,-170,660,340,'#efe6c8',10,6);ctx.shadowBlur=0;txt('TEŞEKKÜRLER.',0,-60,72,'#2a2a2a',0);txt('ARADIĞIMIZI BULDUK.',0,40,56,'#a8321f',0);ctx.restore();};
const E10_S4=(lt,D,gt)=>{skyGrad('#1a1030','#3a2a6a');stars(.8,60);
 const icons=[['EKMEK','#d9a35f'],['YALAN','#ff5a5a'],['FEDAKÂRLIK','#3dd68c']];
 icons.forEach(([l,c],i)=>{const k=E.back(clamp((lt-.4-i*.8)/.4)),fade=clamp(1-(lt-3.6)/.8);ctx.save();ctx.globalAlpha=fade;ctx.translate(540,1050+i*130);ctx.scale(k,k);rbox(-260,-50,520,100,'#12183a',28,6);circ(-200,0,26,c,0);txt(l,30,4,46,'#fff',0);ctx.restore();});
 if(lt>3.8){const k=E.back(clamp((lt-3.8)/.5));ctx.save();ctx.translate(540,1230);ctx.scale(k,k);rbox(-300,-190,600,380,'#f4ead0',18,8);ctx.beginPath();ctx.moveTo(-300,-190);ctx.lineTo(0,20);ctx.lineTo(300,-190);ctx.lineWidth=8;ctx.strokeStyle=INK;ctx.stroke();ctx.fillStyle='#ff5a8a';ctx.beginPath();ctx.moveTo(0,90);ctx.bezierCurveTo(-60,40,-40,-10,0,20);ctx.bezierCurveTo(40,-10,60,40,0,90);ctx.fill();ctx.stroke();txt('DAVET',0,140,70,'#7a4a2b',0);ctx.restore();}};
const E10_S5=(lt,D,gt)=>{skyGrad('#0a1030','#1a2a5a');stars(1,90);
 ctx.save();ctx.beginPath();ctx.arc(200,1000,110,0,7);ctx.fillStyle='#2d6fb3';ctx.fill();ctx.clip();ctx.fillStyle='#3da35d';ctx.beginPath();ctx.ellipse(180,990,50,40,0,0,7);ctx.fill();ctx.restore();circ(200,1000,110,null,7);
 rbox(70,FL-30,940,50,'#8a93a6',12,7);rbox(80,FL-180,920,150,'#cdd7e6',20,6);for(let i=0;i<4;i++)rbox(120+i*220,FL-160,150,100,'#9bd0ff',14,5);
 rbox(640,FL-340,320,160,'#e53a3a',12,6);txt('SİMİT',800,FL-258,64,'#fff',0);
 hasan(580,{s:1.1,floor:FL-30,p:{sm:1,eye:.4}});zorg(330,lt,1.0,1);kid(430,lt,.5);man(900,{s:1.0,floor:FL-30,p:{sm:1,eye:.4},t:lt,f:-1,shirt:'#6b4b4b'});
 for(let i=0;i<8;i++){const u=(lt*.3+i/8)%1;ctx.save();ctx.globalAlpha=Math.sin(u*Math.PI);txt('♥',160+rn(i)*760,1500-u*500,44,'#ff5a8a',0);ctx.restore();}};
const E10_S6=(lt,D,gt)=>{skyGrad('#050812','#101a2a');stars(1,80);circ(820,340,70,'#f4f0d8',0);ground('#0e150f');
 for(let i=0;i<5;i++){const x=120+i*200,y=FL-30-(i%2)*30;ctx.save();ctx.translate(x,y);rbox(-50,-130,100,140,'#6b6f78',46,6);stroke([[-14,-90],[14,-90]],6,'#40444c');stroke([[0,-104],[0,-76]],6,'#40444c');ctx.restore();}
 const t=clamp((lt-2.6)/2.2),g=.5+.5*Math.sin(lt*4);ctx.save();ctx.strokeStyle=`rgba(80,255,120,${.5+.5*t})`;ctx.lineWidth=6;for(const [a,b,c,d] of [[540,FL,520,FL+60],[540,FL,580,FL+40],[540,FL,500,FL+30]]){ctx.beginPath();ctx.moveTo(a,b);ctx.lineTo(c,d);ctx.stroke();}ctx.restore();
 const gl=ctx.createLinearGradient(0,FL,0,FL-800*t);gl.addColorStop(0,'rgba(80,255,120,.7)');gl.addColorStop(1,'rgba(80,255,120,0)');ctx.fillStyle=gl;ctx.beginPath();ctx.moveTo(480,FL);ctx.lineTo(600,FL);ctx.lineTo(560,FL-800*t);ctx.lineTo(520,FL-800*t);ctx.closePath();ctx.fill();};
const E10_S7=makeCards(7,['ÖLÜLER','KALKSAYDI?','BAŞKA','KONU'],(lt)=>{hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E10_S0,E10_S1,E10_S2,E10_S3,E10_S4,E10_S5,E10_S6,E10_S7);
