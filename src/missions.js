export const missions = [
{ id:0, place:'Kawasan Jiran', title:'Majlis Terlalu Bising', pos:[-19,-15], names:['Puan Aina','Pak Ravi'], colors:[0xc78070,0x618ca1],
intro:[['Puan Aina','Pak Ravi, muzik ini terlalu kuat. Anak saya sedang tidur.'],['Pak Ravi','Maaf, saya tidak sedar. Tetapi majlis kami masih berlangsung.'],['Puan Aina','Saya faham. Bolehkah bunyinya diperlahankan?']],
actions:['Pasang muzik lebih kuat supaya majlis lebih meriah.','Perlahankan muzik dan persetujui masa untuk menamatkannya.','Balas dengan memasang bunyi yang lebih kuat.'], correct:1,
feedback:['Muzik lebih kuat akan terus mengganggu anak yang sedang tidur.','', 'Membalas dengan bunyi kuat boleh menambah pertengkaran.'],
resolution:[['Pak Ravi','Baiklah, saya akan perlahankan muzik. Kita juga boleh berbincang tentang masa majlis tamat.'],['Puan Aina','Terima kasih kerana memahami keadaan kami.']],
effects:['Hubungan jiran boleh menjadi renggang.','Jiran pasti menjadi semakin mesra.','Semua orang pasti dapat berehat dengan selesa.'],
reasons:['Jiran berasa terganggu dan tidak dihormati.','Bunyi kuat sentiasa menggembirakan semua orang.','Jiran tidak perlu mengambil berat tentang orang lain.'],
emotion:'Puan Aina', explain:'Keperluannya didengari. Pak Ravi juga masih boleh meneruskan majlis dengan bertimbang rasa.' },
{ id:1, place:'Taman Permainan', title:'Giliran Buaian', pos:[17,-15], names:['Adam','Siew'], colors:[0xe4b65b,0xb584b2],
intro:[['Adam','Saya belum mahu turun. Saya mahu main lagi!'],['Siew','Saya sudah lama menunggu. Saya pun mahu bermain.'],['Adam','Tetapi saya sampai dahulu!']],
actions:['Tolak Adam supaya Siew boleh menggunakan buaian.','Siew tidak perlu bermain hari ini.','Mari bergilir. Adam boleh bermain sebentar lagi, kemudian giliran Siew.'],correct:2,
feedback:['Menolak rakan di buaian boleh menyebabkan kecederaan.','Siew juga berhak mendapat giliran bermain.',''],
resolution:[['Adam','Baiklah. Selepas giliran ini, Siew pula.'],['Siew','Terima kasih! Nanti kita boleh bergilir lagi.']],
effects:['Mereka mungkin bergaduh atau tercedera.','Semua orang mendapat giliran dengan adil.','Persahabatan mereka pasti semakin baik.'],
reasons:['Berebut dan menolak boleh membahayakan rakan.','Orang yang sampai dahulu berhak bermain sepanjang hari.','Menolak ialah cara yang selamat untuk meminta giliran.'],emotion:'Adam dan Siew',explain:'Kedua-duanya mendapat peluang bermain dengan selamat.' },
{ id:2, place:'Dewan Komuniti', title:'Tempahan Bertindih', pos:[0,-30], names:['Amir','Mei Ling'],colors:[0x629e8a,0xdd997a],
intro:[['Amir','Kumpulan kami mahu menggunakan dewan petang ini!'],['Mei Ling','Kumpulan kami juga. Nampaknya jadual kita bertindih.'],['Amir','Bagaimana hendak menyelesaikannya?']],
actions:['Mari semak tempahan dengan penyelaras dan bincangkan waktu yang sesuai.','Bergaduh sahaja. Siapa menang boleh menggunakan dewan.','Kunci dewan supaya kumpulan lain tidak boleh masuk.'],correct:0,
feedback:['','Pergaduhan membahayakan penduduk dan tidak menyelesaikan jadual.','Mengunci dewan menafikan hak kumpulan lain.'],
resolution:[['Mei Ling','Kumpulan kami boleh bermula selepas aktiviti kamu.'],['Amir','Terima kasih. Mari sahkan jadual baharu dengan penyelaras dewan.']],
effects:['Aktiviti boleh terganggu dan pertengkaran mungkin berlaku.','Jadual akan tersusun dengan sendiri.','Semua penduduk pasti berpuas hati.'],
reasons:['Kedua-dua kumpulan mahu menggunakan tempat yang sama tanpa persetujuan.','Jadual bertindih tidak memerlukan perbincangan dengan sesiapa.','Kumpulan paling kuat berhak menentukan semua tempahan.'],emotion:'Amir dan Mei Ling',explain:'Jadual telah dipersetujui dan aktiviti boleh diteruskan.' },
{ id:3, place:'Rumah Terbuka', title:'Hormati Pilihan Makanan', pos:[-18,15],names:['Kumar','Mei Ling','Sara'],colors:[0x6e99bf,0xdd997a,0xb49ac2],
intro:[['Kumar','Saya tidak makan hidangan ini. Ada pilihan lain?'],['Mei Ling','Tidak mengapa, Kumar. Mari kita semak label makanan bersama-sama.'],['Sara','Pilihan makanan kita tidak sama. Apa yang patut kita lakukan?']],
actions:['Paksa semua orang makan makanan yang sama.','Hormati pilihan masing-masing dan bantu mencari makanan yang sesuai.','Ejek rakan yang memilih makanan berbeza.'],correct:1,
feedback:['Memaksa tidak menghormati keperluan dan pilihan seseorang.','','Ejekan boleh melukakan perasaan rakan.'],
resolution:[['Mei Ling','Kita boleh bertanya kepada tuan rumah tentang bahan makanan.'],['Kumar','Terima kasih kerana menghormati pilihan saya.'],['Sara','Kita masih boleh makan dan berbual bersama-sama.']],
effects:['Rakan mungkin berasa tersisih dan hubungan menjadi renggang.','Semua orang pasti berasa dihormati.','Rakan pasti semakin selesa.'],
reasons:['Ejekan boleh melukakan perasaan dan membuatkan rakan tidak selesa.','Semua orang wajib menyukai makanan yang sama.','Memaksa rakan makan ialah satu tanda hormat.'],emotion:'Kumar',explain:'Dia diterima dan dihormati. Mencuba makanan bukan syarat toleransi.' },
{ id:4,place:'Taman Rekreasi',title:'Pendapat Berbeza',pos:[18,16],names:['Puan Devi','Encik Zain'],colors:[0xd69b75,0x668baf],
intro:[['Puan Devi','Saya mencadangkan aktiviti senamrobik di taman.'],['Encik Zain','Saya pula mahu mengadakan aktiviti membaca. Kami perlukan suasana tenang.'],['Puan Devi','Kedua-dua aktiviti itu baik. Bagaimana kita boleh mengaturnya?']],
actions:['Hanya cadangan orang yang paling kuat bersuara boleh diterima.','Batalkan semua aktiviti kerana pendapat berbeza.','Dengar keperluan kedua-dua pihak dan persetujui kawasan atau waktu yang sesuai.'],correct:2,
feedback:['Suara paling kuat tidak semestinya mewakili keperluan semua.','Kedua-dua aktiviti baik dan boleh diatur melalui perbincangan.',''],
resolution:[['Encik Zain','Kita boleh membaca di sudut yang tenang.'],['Puan Devi','Senamrobik pula di kawasan lapang. Kita pastikan bunyinya tidak mengganggu.']],
effects:['Penduduk sukar bekerjasama dan aktiviti boleh terganggu.','Semua keputusan pasti adil.','Semua penduduk pasti gembira.'],
reasons:['Keperluan orang lain tidak didengari dan persetujuan sukar dicapai.','Pendapat berbeza mesti ditolak tanpa didengari.','Aktiviti membaca dan bersenam tidak boleh diadakan di taman yang sama.'],emotion:'Puan Devi dan Encik Zain',explain:'Pandangan masing-masing didengari dan ruang sesuai telah dipersetujui.' }
];
export const emotions=['😄 Gembira','😌 Lega','😢 Sedih','😡 Marah','😟 Kecewa'];
export const blankMission=()=>({stage:'intro',line:0,attempts:{action:0,effect:0,reason:0,emotion:0},passed:{},feeling:null});
export function fresh(){return {version:1,name:'Wira',avatar:0,position:[0,7],intro:0,missions:missions.map(blankMission),settings:{music:true,sfx:true,reduced:false},reflection:'',promise:''};}
export function totals(s){return {harmony:40+s.missions.reduce((n,m)=>n+(m.passed.action?10:0)+(m.stage==='done'?2:0),0),stars:s.missions.reduce((n,m)=>n+(m.passed.action&&m.attempts.action===1?1:0)+(m.passed.reason&&m.attempts.effect===1&&m.attempts.reason===1?1:0)+(m.passed.emotion&&m.attempts.emotion===1?1:0),0),done:s.missions.filter(m=>m.stage==='done').length};}
export function answer(s,id,kind,index){const m=s.missions[id],data=missions[id];if(m.stage!==kind||m.passed[kind])return false;m.attempts[kind]++;const ok=kind==='action'?index===data.correct:kind==='emotion'?index<2:index===0;if(ok){m.passed[kind]=true;m.stage=({action:'resolution',effect:'reason',reason:'sentence',emotion:'personal'})[kind];m.line=0;}return ok;}
