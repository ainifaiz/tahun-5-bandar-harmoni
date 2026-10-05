import * as T from '../assets/vendor/three.module.js';
import {missions} from './missions.js';
export {T};
const mats=new Map();export function mat(c){if(!mats.has(c))mats.set(c,new T.MeshLambertMaterial({color:c}));return mats.get(c);}
export function box(parent,x,y,z,w,h,d,c){const o=new T.Mesh(new T.BoxGeometry(w,h,d),mat(c));o.position.set(x,y,z);parent.add(o);return o;}
export function label(text,w=7){const c=document.createElement('canvas');c.width=768;c.height=160;const a=c.getContext('2d');a.fillStyle='#fff7df';a.fillRect(4,4,760,152);a.strokeStyle='#5c6d53';a.lineWidth=9;a.strokeRect(4,4,760,152);a.fillStyle='#273f34';a.font='bold 40px sans-serif';a.textAlign='center';a.textBaseline='middle';a.fillText(text,384,80,730);const texture=new T.CanvasTexture(c);texture.minFilter=T.LinearFilter;const s=new T.Sprite(new T.SpriteMaterial({map:texture,depthTest:false}));s.scale.set(w,w*160/768,1);return s;}
export function createWorld(canvas){
 const renderer=new T.WebGLRenderer({canvas,antialias:false,powerPreference:'low-power'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setClearColor(0xc5d4d5);const scene=new T.Scene();scene.background=new T.Color(0xc5d4d5);scene.fog=new T.Fog(0xc5d4d5,65,140);
 const camera=new T.OrthographicCamera(-25,25,18,-18,.1,180);const ambient=new T.HemisphereLight(0xe7edee,0x697b54,2.3);scene.add(ambient);const sun=new T.DirectionalLight(0xffe9b6,2.2);sun.position.set(-30,50,20);scene.add(sun);
 const colliders=[],sites=[],flowers=[],clouds=[];const addObstacle=(x,z,w,d)=>colliders.push({x,z,w,d});
 box(scene,0,-.5,0,80,1,82,0x87aa79);box(scene,0,.012,0,7,.04,77,0xd7c9aa);box(scene,0,.015,-14,69,.04,5,0xd7c9aa);box(scene,0,.015,16,69,.04,5,0xd7c9aa);box(scene,0,.018,2,14,.05,13,0xe8d9b9);
 for(let z=-36;z<38;z+=2.5)for(const x of [-2,0,2])box(scene,x,.05,z,1.65,.025,1.85,((z*2|0)%3)?0xdfd1b5:0xc7bba0);
 for(const z of [-14,16])for(let x=-32;x<=32;x+=3)box(scene,x,.06,z,2.2,.025,1.8,0xe5d8bb);
 // Dataran: fountain and tiled rim, reachable on all sides.
 const pool=new T.Mesh(new T.CylinderGeometry(2.7,2.9,.6,12),mat(0xe7d8b1));pool.position.set(0,.3,0);scene.add(pool);const water=new T.Mesh(new T.CylinderGeometry(2.4,2.4,.1,12),mat(0x77bdcd));water.position.y=.65;scene.add(water);addObstacle(0,0,5.8,5.8);box(scene,0,1,0,.7,1.4,.7,0xe9ddc2);
 function house(x,z,color,w=7,d=6){box(scene,x,1.8,z,w,3.6,d,color);addObstacle(x,z,w,d);box(scene,x,3.8,z,w+1,.35,d+1,0x8d6852);const roof=new T.Mesh(new T.ConeGeometry(w*.84,2.7,4),mat(0xad7256));roof.rotation.y=Math.PI/4;roof.scale.z=d/w;roof.position.set(x,5.2,z);scene.add(roof);box(scene,x,1.2,z+d/2+.05,1.2,2.4,.15,0x695444);for(const dx of [-2.2,2.2]){box(scene,x+dx,2,z+d/2+.08,1.3,1.25,.15,0x6d939d);box(scene,x+dx,2,z+d/2+.18,.1,1.3,.08,0xffe7b4);}box(scene,x,.15,z+d/2+1,w+1,.3,2,0xb29173);for(const dx of [-w/2,w/2]){box(scene,x+dx,1.5,z+d/2+1.5,.23,3,.23,0x8a6b50);addObstacle(x+dx,z+d/2+1.5,.3,.3);} }
 house(-24,-22,0xe3d2a3);house(-14,-23,0xe8bd99);house(0,-36,0xd5dfbd,12,6);house(-21,9,0xefc89f,10,6);
 function tree(x,z,palm=false){box(scene,x,1.5,z,.7,3,.7,0x8d7452);addObstacle(x,z,1.3,1.3);if(palm){for(let k=0;k<5;k++){const leaf=box(scene,x,3.7,z,4,.25,1,0x4f8566);leaf.rotation.y=k*Math.PI/5;leaf.rotation.z=.13;}}else{box(scene,x,3.6,z,3.5,2.7,3.5,0x668d61);box(scene,x,5,z,2.6,1,2.6,0x7ba06a);}}
 for(let i=0;i<16;i++){tree(-37,-36+i*4.6,i%3===0);tree(37,-36+i*4.6,i%3===1);}for(const p of [[-29,-28],[29,-28],[-30,7],[31,8],[-10,28],[11,30],[-28,30],[29,30],[-10,-5],[11,-5]])tree(...p,true);
 function bench(x,z){box(scene,x,.8,z,3,.3,1,0xa57e50);box(scene,x,1.4,z-.5,3,1,.2,0xa57e50);for(const d of [-1,1])box(scene,x+d,.4,z,.25,.8,.6,0x5f6960);addObstacle(x,z,3,1.4);}
 for(const p of [[-7,4],[7,4],[25,-20],[24,23],[-28,17]])bench(...p);
 // Low fences leave generous front openings.
 for(const z of [-27,25])for(let x=10;x<=29;x+=1.4){box(scene,x,.6,z,.18,1.2,.2,0xf1dfb8);addObstacle(x,z,.3,.4);}box(scene,19.5,.8,-27,20,.15,.2,0xf1dfb8);box(scene,19.5,.8,25,20,.15,.2,0xf1dfb8);
 for(let i=0;i<70;i++){const x=Math.sin(i*71)*33,z=Math.cos(i*23)*34;if(Math.abs(x)<6||Math.abs(z+14)<4||Math.abs(z-16)<4)continue;const f=box(scene,x,.25,z,.35,.4,.35,[0xf0c47e,0xd99fa9,0xdce5bd][i%3]);flowers.push(f);}
 // Play equipment and a seat that can safely stop before changing rider.
 const swing=new T.Group();swing.position.set(18,0,-21);scene.add(swing);for(const x of [-2.3,2.3])box(swing,x,2,0,.25,4,.3,0x709b98);box(swing,0,4,0,5,.3,.4,0x709b98);const seat=new T.Group();seat.position.y=3.8;swing.add(seat);for(const x of [-.75,.75])box(seat,x,-1.35,0,.08,2.7,.08,0x616964);box(seat,0,-2.8,0,2,.2,1,0xd3aa64);addObstacle(18,-21,5,2);
 box(scene,26,1.4,-23,2,2.8,2,0xeac07f);const slide=box(scene,26,1.25,-20.7,1.5,.15,4.2,0x8dafbf);slide.rotation.x=.58;addObstacle(26,-22,2,6);
 const speaker=box(scene,-17,.8,-18,1,1.6,.8,0x4b5d61);const rings=[];for(let i=0;i<3;i++){const r=new T.Mesh(new T.TorusGeometry(.8+i*.4,.05,4,24),mat(0xf2d384));r.position.set(-17,1.6,-17.5+i*.15);scene.add(r);rings.push(r);}
 const schedule=label('Jadual bertindih',5);schedule.position.set(5,2.8,-30);scene.add(schedule);box(scene,5,1,-30,.2,2,.2,0x886744);addObstacle(5,-30,1,1);
 box(scene,-20,.85,17,6,.3,2,0xb78d61);addObstacle(-20,17,6,2);for(let i=0;i<3;i++){box(scene,-22+i*2,1.1,17,1,.2,.8,[0xe4c267,0x91b87e,0xc68165][i]);const l=label(['Buah','Sayur','Tanya bahan'][i],2);l.position.set(-22+i*2,1.8,17);scene.add(l);}
 const book=box(scene,23,1,19,1,.12,.7,0xe7d7b1);box(scene,15,.05,20,5,.08,4,0xa6c3b1);const bookSign=label('Sudut Bacaan',4);bookSign.position.set(25,2,21);scene.add(bookSign);
 for(const m of missions){const marker=label('⚡ Konflik',4);marker.position.set(m.pos[0],4,m.pos[1]);scene.add(marker);const sign=label(m.place,7);sign.position.set(m.pos[0],.9,m.pos[1]+4);scene.add(sign);sites.push({marker,sign,state:''});}
 for(let i=0;i<9;i++){const g=new T.Group();for(let j=0;j<3;j++)box(g,j*2,0,0,4,1.2,2.2,0xe1e6dc);g.position.set(-45+i*10,25,-45+(i%3)*3);scene.add(g);clouds.push(g);}
 const rainbow=new T.Group();for(let i=0;i<6;i++){const r=new T.Mesh(new T.TorusGeometry(12-i*.38,.2,4,48,Math.PI),new T.MeshBasicMaterial({color:[0xe49791,0xe7b57a,0xe6d681,0x9dc38b,0x8ab8ce,0xb5a0c5][i]}));r.position.set(0,6,-22);rainbow.add(r);}rainbow.visible=false;scene.add(rainbow);
 function free(x,z){return Math.abs(x)<38&&z>-39&&z<39&&!colliders.some(c=>Math.abs(x-c.x)<c.w/2+.45&&Math.abs(z-c.z)<c.d/2+.45);}
 let warmth=0,swingAge=0;function update(dt,t,state,score){const target=(score-40)/60;warmth+=(target-warmth)*Math.min(1,dt*1.5);scene.background.copy(new T.Color(0xc5d4d5).lerp(new T.Color(0xafdbe1),warmth));scene.fog.color.copy(scene.background);sun.intensity=1.3+warmth;rainbow.visible=score===100;flowers.forEach(f=>f.scale.y=.65+warmth*.7);clouds.forEach((c,i)=>{c.visible=i<(score>70?3:score>40?6:9);if(!state.settings.reduced)c.position.x=((c.position.x+dt*.25+50)%100)-50;});
 const recovered=state.missions[0].passed.action;rings.forEach((r,i)=>{r.scale.setScalar(recovered?.22:.9+Math.sin(t*3+i)*.1);});swingAge=state.missions[1].passed.action?swingAge+dt:0;seat.rotation.x=state.settings.reduced?0:Math.sin(t*2)*(state.missions[1].passed.action?(swingAge<2?0:.12):.3);
 const scheduleText=state.missions[2].passed.action?'2–3 ptg: Amir | 3–4 ptg: Mei Ling':'Jadual bertindih';if(schedule.userData.text!==scheduleText){schedule.material.map.dispose();const replacement=label(scheduleText,7);schedule.material=replacement.material;schedule.scale.copy(replacement.scale);schedule.userData.text=scheduleText;}
 sites.forEach((s,i)=>{const m=state.missions[i],v=m.stage==='done'?'✅ Selesai':m.passed.action?'💬 Dibantu':'⚡ Konflik';if(s.state!==v){s.marker.material.map.dispose();s.marker.material=label(v,4).material;s.state=v;}if(!state.settings.reduced)s.marker.position.y=4+Math.sin(t*2+i)*.12;});}
 function resize(){const w=innerWidth,h=innerHeight;renderer.setSize(w,h);const size=w/h<1?23:18;camera.left=-size*w/h;camera.right=size*w/h;camera.top=size;camera.bottom=-size;camera.updateProjectionMatrix();}resize();addEventListener('resize',resize);
 return {scene,camera,renderer,free,update,sites,seat,rainbow,colliders};
}
