/* ===== Bölüm 4 · Veresiye Defteri ===== */
var GROUPS=[[0,1],[2],[3],[4],[5],[6],[7]];
TL_NEXT='5.';
const E4_S0=(lt,D,gt)=>{shipInside(lt);hasan(280,{s:1.2,floor:FL-20,p:{eye:.6,mo:0,sm:-.2}});zorg(760,lt,1.5);
 const t1=TL.sent[1].start-SC[0].a;
 if(lt<t1){const a=.5+.5*Math.sin(lt*3);txt('...',760,FL-20-1.5*470,90,`rgba(255,255,255,${a})`,8);}
 else{const k=E.back(clamp((lt-t1-.3)/.4)),gl=Math.sin(lt*30)>.2;ctx.save();ctx.translate(540,1130);ctx.scale(k,k);rbox(-330,-110,660,220,'#10182e',34,7);const s=gl?'V3R3SİY3':'VERESİYE';txt(s,0,6,88,gl?'#ff5a5a':'#3dd68c',0);ctx.restore();}};
const E4_S1=(lt,D,gt)=>{shipInside(lt);hasan(250,{s:1.2,floor:FL-20,p:{eye:.9,mo:.3}});zorg(780,lt,1.5,-1,{arm:Math.sin(lt*2)*10});
 for(let i=0;i<5;i++){const u=(lt*.35+i/5)%1;ctx.save();ctx.globalAlpha=Math.sin(u*Math.PI);txt('?',640+((i*97)%260),860-u*260,90,'#ffb02e',9);ctx.restore();}
 const k=E.back(clamp((lt-.4)/.4));ctx.save();ctx.translate(540,1280);ctx.scale(k,k);rbox(-300,-70,600,140,'#fff',34,6);txt('VERESİYE = ?',0,6,70,'#111',0);ctx.restore();};
const E4_S2=(lt,D,gt)=>{shipInside(lt);const u=clamp((lt-1.4)/1.2);hasan(540,{s:1.5,floor:FL-20,p:{sm:1,eye:.4,aRu:lerp(12,60,E.io(u)),aRl:lerp(6,120,E.io(u))}});
 if(u>0){notebook(540+120,lerp(FL-20-200,FL-20-520,E.out(u)),1.0,.15*E.out(u));}
 if(u>.5){ctx.save();ctx.globalAlpha=Math.sin((u-.5)*Math.PI*2);for(const [dx,dy] of [[-120,-60],[100,-120],[140,40]])txt('✦',660+dx,FL-20-520+dy,44,'#ffd36b',0);ctx.restore();}};
const E4_S3=(lt,D,gt)=>{shipInside(lt);ctx.save();ctx.translate(540,1360);rbox(-380,-370,760,740,'#fffbe8',24,8);txt('MAHALLE DEFTERİ',0,-300,52,'#7a4a2b',0);
 const rows=[['Ayşe Teyze','3 ekmek'],['Mehmet Abi','1 çay'],['Fatma','2 simit'],['Kemal Usta','5 çay']];
 rows.forEach(([n,m],i)=>{const y=-170+i*135,tk=clamp((lt-1.5-i*1.4)/.5);ctx.save();ctx.font='700 56px Arial';ctx.fillStyle='#3a2a1a';ctx.textAlign='left';ctx.textBaseline='middle';ctx.fillText(n,-320,y);ctx.fillStyle='#8a6a4a';ctx.fillText(m,60,y);stroke([[-320,y+50],[330,y+50]],4,'#00000022');
  if(tk>0){ctx.globalAlpha=tk;stroke([[250,y-6],[285,y+28],[345,y-36]].map(p=>[p[0]-10,p[1]]),14,'#3dd68c');ctx.globalAlpha=1;}ctx.restore();});ctx.restore();};
const E4_S4=(lt,D,gt)=>{shipInside(lt);hasan(220,{s:1.2,floor:FL-20,p:{sm:1,eye:.4}});zorg(760,lt,1.6);
 notebook(600,FL-20-1.6*230,.9,-.2+.1*Math.sin(lt*4));
 const t=clamp((lt-2.4)/.6);ctx.save();ctx.globalAlpha=t;for(const [dx,dy] of [[-30,-30],[0,-10]]){circ(760+dx*1.6-26*1.6*1.0,FL-20-1.6*340+dy,16+8*Math.sin(lt*8),'#fff',0);}ctx.restore();
 for(let i=0;i<5;i++){const u=(lt*.8+i/5)%1;ctx.save();ctx.globalAlpha=Math.sin(u*Math.PI)*t;txt('✦',560+i*70,FL-20-1.6*420-u*120,40,'#ffd36b',0);ctx.restore();}};
const E4_S5=(lt,D,gt)=>{skyGrad('#1a1030','#3a2a6a');stars(.7,60);const gl=ctx.createRadialGradient(540,1100,20,540,1100,560);gl.addColorStop(0,'rgba(255,205,80,.5)');gl.addColorStop(1,'rgba(255,205,80,0)');ctx.fillStyle=gl;ctx.fillRect(0,600,W,1000);
 ctx.save();ctx.translate(540,1270);rbox(-380,-300,760,600,'#fffbe8',24,8);const t2=wordT(6,/^Defterde,|^Defterde$/);
 txt('BORÇ',0,-110,150,'#8a6a4a',0);const c=clamp((gt-wordT(6,/^Çünkü/)-.3)/.6);stroke([[-210,-110],[210,-110]],18,'#ff5a5a');
 const g=clamp((gt-t2)/.6);if(gt>t2-.1){ctx.save();ctx.globalAlpha=g;txt('GÜVEN',0,110,150,'#d9981a',0);ctx.beginPath();ctx.moveTo(0,300);ctx.restore();}ctx.restore();
 if(gt>t2){const k=E.back(clamp((gt-t2)/.5));ctx.save();ctx.translate(540,1690);ctx.scale(k,k);ctx.fillStyle='#ff5a8a';ctx.beginPath();ctx.moveTo(0,40);ctx.bezierCurveTo(-90,-30,-60,-100,0,-50);ctx.bezierCurveTo(60,-100,90,-30,0,40);ctx.fill();ctx.lineWidth=8;ctx.strokeStyle=INK;ctx.stroke();ctx.restore();}};
const E4_S6=makeCards(7,['DEFTERİ','HEDİYE ET','GERİ','İSTESİN'],(lt)=>{hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E4_S0,E4_S1,E4_S2,E4_S3,E4_S4,E4_S5,E4_S6);
