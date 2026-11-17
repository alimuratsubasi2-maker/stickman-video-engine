/* ===== Bölüm 8 · Uzaylı Çocuk ===== */
var GROUPS=[[0,1],[2],[3],[4],[5],[6],[7]];
TL_NEXT='9.';
const E8_S0=(lt,D,gt)=>{shipInside(lt);const t1=TL.sent[1].start-SC[0].a,h=clamp((lt-t1)/2.5);
 const col=`rgb(${lerp(185,155,h)|0},${lerp(216,214,h)|0},${lerp(176,143,h)|0})`;
 hasan(200,{s:1.3,floor:FL-20,p:{eye:.6,sm:lt>t1?.8:-.2,hd:-4}});sickBed(720,FL-20-90,lt,col,h);
 const put=clamp(lt/1.2);cellBox(lerp(300,560,E.io(put)),lerp(FL-20-380,FL-20-250,E.io(put)),.9,lt,lt>t1+2?clamp(1-(lt-t1-2)/1.5):1);
 epTitle(gt,'UZAYLI','ÇOCUK',8);};
const E8_S1=(lt,D,gt)=>{shipInside(lt);hasan(220,{s:1.3,floor:FL-20,p:{sm:1,eye:.5}});sickBed(720,FL-20-90,lt,'#9bd68f',1);
 const k=E.back(clamp((lt-2.4)/.4));ctx.save();ctx.translate(590,FL-20-300);ctx.scale(k,k);rbox(-210,-60,420,110,'#fff',34,6);txt('Teşekkürler',0,0,58,'#111',0);ctx.restore();};
const E8_S2=(lt,D,gt)=>{shipInside(lt);const sh=lt<1.6?0:Math.sin(lt*26)*0;zorg(560,lt*.2,1.6,-1,{arm:0});kid(840,lt,.7,{f:-1});hasan(210,{s:1.2,floor:FL-20,p:{sm:1,eye:.5}});
 for(const [dx,dy] of [[-120,-160],[130,-200],[-150,-40]]){ctx.save();ctx.globalAlpha=.6+.4*Math.sin(lt*10);stroke([[560+dx,FL-20-1.6*300+dy],[560+dx*1.25,FL-20-1.6*300+dy*1.25]],8,'#fff');ctx.restore();}
 if(lt>2.4){const k=E.back(clamp((lt-2.4)/.5));ctx.save();ctx.translate(700,FL-20-1.6*470);ctx.scale(k,k);ctx.fillStyle='#ff5a8a';ctx.beginPath();ctx.moveTo(0,30);ctx.bezierCurveTo(-70,-20,-50,-80,0,-40);ctx.bezierCurveTo(50,-80,70,-20,0,30);ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();}};
const E8_S3=(lt,D,gt)=>{skyGrad('#05060f','#141a3a');stars(1,90);const p=clamp((lt-1.2)/1.0);
 if(p<=0){circ(540,1130,230,'#c0542e',10);ctx.fillStyle='rgba(0,0,0,.15)';ctx.beginPath();ctx.arc(520,1110,120,0,7);ctx.fill();}
 else{for(let i=0;i<16;i++){const a=i/16*6.28+rn(i)*.4,d=p*(260+rn(i+3)*420),r=60+rn(i)*50;ctx.save();ctx.globalAlpha=1-p*.6;ctx.translate(540+Math.cos(a)*d,1130+Math.sin(a)*d*.9);ctx.rotate(a+p*3);circ(0,0,r*(1-p*.4),'#c0542e',7);ctx.restore();}
  ctx.save();ctx.globalAlpha=clamp(1-p*1.6);const g=ctx.createRadialGradient(540,1130,10,540,1130,420);g.addColorStop(0,'rgba(255,230,150,1)');g.addColorStop(1,'rgba(255,230,150,0)');ctx.fillStyle=g;ctx.fillRect(0,700,W,900);ctx.restore();}
 if(lt>3.4){for(let i=0;i<3;i++){const x=lerp(-200,1280,((lt-3.4)*.18+i*.18)%1.2);saucer(x,1500+i*60,.5,lt+i,0);}}};
const E8_S4=(lt,D,gt)=>{skyGrad('#05060f','#141a3a');stars(1,90);
 ctx.save();ctx.beginPath();ctx.arc(780,1250,210,0,7);ctx.fillStyle='#2d6fb3';ctx.fill();ctx.clip();ctx.fillStyle='#3da35d';for(const [ex,ey,rx,ry] of [[-60,-40,90,60],[60,40,70,90],[-20,120,60,40]]){ctx.beginPath();ctx.ellipse(780+ex,1250+ey,rx,ry,0,0,7);ctx.fill();}ctx.restore();circ(780,1250,210,null,9);
 const x=lerp(80,420,E.io(clamp(lt/3.5)));saucer(x,1200,.8,lt,0);
 ctx.save();ctx.globalAlpha=.5+.5*Math.sin(lt*3);txt('?',300,1010,170,'#ffb02e',12);ctx.restore();
 if(lt>3.6){const k=E.back(clamp((lt-3.6)/.4));ctx.save();ctx.translate(780,1010);ctx.scale(k,k);ctx.fillStyle='#ff5a8a';ctx.beginPath();ctx.moveTo(0,30);ctx.bezierCurveTo(-70,-20,-50,-80,0,-40);ctx.bezierCurveTo(50,-80,70,-20,0,30);ctx.fill();ctx.lineWidth=7;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();}};
const E8_S5=(lt,D,gt)=>{shipInside(lt);hasan(210,{s:1.2,floor:FL-20,p:{eye:.9,mo:.1}});zorg(780,lt,1.5,-1,{arm:0});
 const labs=[['EKMEK','#d9a35f'],['YALAN','#ff5a5a'],['FEDAKÂRLIK','#3dd68c']];labs.forEach(([l,c],i)=>{const k=E.back(clamp((lt-.5-i*.6)/.4));ctx.save();ctx.translate(540,1010+i*130);ctx.scale(k,k);rbox(-260,-50,520,100,'#12183a',28,6);circ(-200,0,26,c,0);txt(l,30,4,46,'#fff',0);ctx.restore();});
 if(lt>2.6){ctx.save();ctx.globalAlpha=clamp((lt-2.6)/.5);txt('AMAÇ?',780,FL-20-1.5*470,110,'#ffb02e',12);ctx.restore();}};
const E8_S6=makeCards(7,['HEMEN','SÖYLESİN','BİR SÜRE','SAKLASIN'],(lt)=>{hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E8_S0,E8_S1,E8_S2,E8_S3,E8_S4,E8_S5,E8_S6);
