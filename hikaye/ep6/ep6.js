/* ===== Bölüm 6 · İkinci Sınav: Yalan ===== */
var GROUPS=[[0,1],[2],[3,4],[5],[6],[7]];
TL_NEXT='7.';
function deviceBox(x,y,sc,col,label){ctx.save();ctx.translate(x,y);ctx.scale(sc,sc);rbox(-120,-170,240,340,'#18203a',36,7);const gl=.5+.5*Math.sin(performance_t*6);ctx.fillStyle=col;ctx.globalAlpha=.55+.4*gl;ctx.beginPath();ctx.roundRect(-92,-140,184,190,22);ctx.fill();ctx.globalAlpha=1;if(label)txt(label,0,105,34,'#fff',0);ctx.restore();}
var performance_t=0;
const E6_S0=(lt,D,gt)=>{performance_t=lt;shipInside(lt);hasan(240,{s:1.2,floor:FL-20,p:{sm:1,eye:.4}});zorg(790,lt,1.5);
 for(let i=0;i<5;i++){kid(420+i*80,lt,.5);const a=Math.sin(lt*4+i)*.15;ctx.save();ctx.translate(420+i*80,FL-20-170);ctx.rotate(a);ctx.fillStyle='#d9a35f';ctx.beginPath();ctx.ellipse(18,0,22,12,0,0,7);ctx.fill();ctx.restore();}
 const t1=TL.sent[1].start-SC[0].a+1.2;if(lt>t1){const k=E.back(clamp((lt-t1)/.5));ctx.save();ctx.translate(540,1120);ctx.scale(k,k);rbox(-420,-130,840,260,'#12183a',40,7);txt('İKİNCİ SINAV',0,-40,86,'#fff',0);txt('YALAN',0,56,86,'#ff5a5a',0);ctx.restore();}};
const E6_S1=(lt,D,gt)=>{performance_t=lt;shipInside(lt);hasan(220,{s:1.2,floor:FL-20,p:{eye:.8,mo:.2}});zorg(800,lt,1.4);
 ctx.save();rbox(420,FL-20-130,240,30,'#8a93a6',12,5);ctx.restore();
 const red=Math.sin(lt*5)>0,k=E.back(clamp(lt/.6));deviceBox(540,FL-20-310,1.0*k,'#3dd68c','');
 if(lt>2.6){ctx.save();const k2=E.back(clamp((lt-2.6)/.4));ctx.translate(540,1000);ctx.scale(k2,k2);rbox(-340,-60,680,120,'#12183a',30,6);circ(-270,0,36,'#ff5a5a',0);txt('YALAN = KIRMIZI',40,4,54,'#fff',0);ctx.restore();}};
const E6_S2=(lt,D,gt)=>{performance_t=lt;shipInside(lt);hasan(200,{s:1.15,floor:FL-20,p:{eye:.8,mo:.1}});
 const t3=TL.sent[3].start-SC[2].a,t4=TL.sent[4].start-SC[2].a;
 const ent=E.out(clamp((lt-.2)/1.0));alien(lerp(1300,780,ent),FL-20,1.7,lt,{f:-1,col:'#9a7ad6',arm:0});
 ctx.save();ctx.translate(lerp(1300,780,ent)-0,FL-20-1.7*398);rbox(-70,-40,140,40,'#5a2fa0',10,6);rbox(-40,-110,80,80,'#5a2fa0',10,6);ctx.restore();
 if(lt>1.4){const a=clamp((lt-1.4)/.4);ctx.save();ctx.globalAlpha=a;rbox(520,1700,480,84,'#12183a',22,0);txt('KONSEY BAŞKANI',760,1743,42,'#c9a8ff',0);ctx.restore();}
 if(lt>t4+.2){const k=E.back(clamp((lt-t4-.2)/.4));ctx.save();ctx.translate(540,1100);ctx.scale(k,k);rbox(-430,-160,860,320,'#fff',40,6);txt('Dünyalıların hepsi',0,-80,64,'#111',0);txt('yalancıdır.',0,-10,64,'#d03030',0);txt('Kabul ediyor musun?',0,76,64,'#111',0);ctx.restore();}};
const E6_S3=(lt,D,gt)=>{performance_t=lt;shipInside(lt);const sw=Math.sin(lt*2.5);hasan(540,{s:1.4,floor:FL-20,p:{hd:6*sw,aRu:160,aRl:150,eye:.8,mo:.2,sm:-.3}});
 cloud(220,1040,1);txt('EVET',220,1030,64,'#d03030',0);txt('İNSANLIK',220,1190,40,'#fff',9);txt('YALANCI İLAN',220,1235,34,'#fff',8);
 cloud(860,1040,1);txt('HAYIR',860,1030,64,'#3a6bd0',0);txt('CİHAZ KIRMIZI',860,1190,38,'#fff',8);txt('YANABİLİR',860,1235,34,'#fff',8);};
const E6_S4=(lt,D,gt)=>{skyGrad('#1a1030','#3a2a6a');stars(.8,60);ground('#171028');
 const gl=ctx.createRadialGradient(540,1150,20,540,1150,520);gl.addColorStop(0,'rgba(255,205,80,.45)');gl.addColorStop(1,'rgba(255,205,80,0)');ctx.fillStyle=gl;ctx.fillRect(0,650,W,1000);
 hasan(540,{s:1.6,p:{sm:-.2,eye:.8}});ctx.save();ctx.translate(210,1100);ctx.rotate(-.15);circ(0,0,110,'#d9981a',8);circ(0,0,86,null,5);ctx.strokeStyle='#fff';ctx.stroke();txt('HİÇ',0,-28,40,'#fff',0);txt('YALAN',0,14,40,'#fff',0);txt('YOK',0,56,40,'#fff',0);ctx.restore();
 const u=lt*.8%1;ctx.save();ctx.translate(880,1060-Math.sin(lt*2)*20);ctx.rotate(.5);ctx.fillStyle='#e8eefc';ctx.beginPath();ctx.moveTo(0,-90);ctx.quadraticCurveTo(50,-10,0,90);ctx.quadraticCurveTo(-50,-10,0,-90);ctx.fill();ctx.lineWidth=6;ctx.strokeStyle=INK;ctx.stroke();stroke([[0,-80],[0,100]],5,INK);ctx.restore();txt('küçük yalan',880,1230,42,'#fff',9);
 for(const [dx,dy] of [[-60,-110],[70,-60]])txt('✦',880+dx,1090+dy,40,'#ffd36b',0);};
const E6_S5=makeCards(7,['YALAN','SÖYLESİN','DOĞRUYU','SÖYLESİN'],(lt)=>{hasan(150,{s:1.4,p:{hd:8,eye:.3,aRu:140,aRl:150}});});
SCN.length=0;SCN.push(E6_S0,E6_S1,E6_S2,E6_S3,E6_S4,E6_S5);
