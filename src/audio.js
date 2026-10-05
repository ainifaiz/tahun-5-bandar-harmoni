export class Audio {
 constructor(settings,notice){this.settings=settings;this.notice=notice;this.time=0;this.note=0;}
 start(){try{this.ctx??=new(window.AudioContext||window.webkitAudioContext)();this.ctx.resume();}catch{}}
 tone(f=440,d=.12,volume=.035){if(!this.ctx||this.ctx.state!=='running')return;const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(volume,this.ctx.currentTime);g.gain.exponentialRampToValueAtTime(.0001,this.ctx.currentTime+d);o.connect(g).connect(this.ctx.destination);o.start();o.stop(this.ctx.currentTime+d);}
 effect(kind){if(!this.settings.sfx)return;this.tone(kind==='step'?130:kind==='win'?880:kind==='bad'?230:660,kind==='step'?.045:.22,kind==='step'?.008:.035);}
 update(dt,active){if(!active||!this.settings.music)return;this.time+=dt;if(this.time>1.1){this.time=0;this.tone([261.63,329.63,392,329.63,293.66,349.23,440,392][this.note++%8],.95,.014);}}
 speak(text){if(!('speechSynthesis'in window)){this.notice('Bacaan suara tidak tersedia. Sila baca teks pada skrin.');return;}speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='ms-MY';u.rate=.87;const v=speechSynthesis.getVoices().find(v=>/^ms/i.test(v.lang));if(v)u.voice=v;else this.notice('Suara Bahasa Melayu bergantung pada suara yang tersedia pada peranti.');u.onerror=()=>this.notice('Suara tidak dapat dimainkan. Teks masih tersedia.');speechSynthesis.speak(u);}
 stop(){window.speechSynthesis?.cancel();}
}
