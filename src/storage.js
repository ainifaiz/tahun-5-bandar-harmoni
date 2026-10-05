import {fresh} from './missions.js';
export const KEY='bandar-harmoni-v1';
const stages=['intro','action','resolution','effect','reason','sentence','emotion','personal','done'];
export function validate(s){
 if(!s||s.version!==1||!Number.isInteger(s.avatar)||s.avatar<0||s.avatar>3||typeof s.name!=='string'||s.name.length>24||!Array.isArray(s.missions)||s.missions.length!==5)return null;
 if(!Number.isInteger(s.intro)||s.intro<0||s.intro>5)return null;
 for(const m of s.missions){if(!m||!stages.includes(m.stage)||!Number.isInteger(m.line)||m.line<0||m.line>3||!m.attempts||!m.passed)return null;for(const k of ['action','effect','reason','emotion'])if(!Number.isInteger(m.attempts[k])||m.attempts[k]<0||m.attempts[k]>10000||(m.passed[k]!==undefined&&m.passed[k]!==true))return null;
 const order=stages.indexOf(m.stage);for(const [k,n]of [['action',2],['effect',4],['reason',5],['emotion',7]])if((order>=n)!==!!m.passed[k]||(m.passed[k]&&m.attempts[k]<1))return null;
 if(m.stage==='done'&&(!Number.isInteger(m.feeling)||m.feeling<0||m.feeling>4))return null;}
 if(!Array.isArray(s.position)||s.position.length!==2||s.position.some(v=>!Number.isFinite(v)||Math.abs(v)>40))s.position=[0,7];
 const base=fresh();s.settings=Object.fromEntries(Object.keys(base.settings).map(k=>[k,typeof s.settings?.[k]==='boolean'?s.settings[k]:base.settings[k]]));s.reflection=typeof s.reflection==='string'?s.reflection.slice(0,200):'';s.promise=typeof s.promise==='string'?s.promise.slice(0,200):'';return s;
}
export function read(){try{return validate(JSON.parse(localStorage.getItem(KEY)));}catch{return null;}}
export function save(s){try{localStorage.setItem(KEY,JSON.stringify(s));return true;}catch{return false;}}
