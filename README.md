# 🏙️ Bandar Harmoni 3D — Misi Wira Toleransi

Permainan eksplorasi Three.js dalam Bahasa Melayu untuk Pendidikan Moral Tahun 5. Lima misi boleh dilawati dalam apa-apa urutan. Anggaran 15–25 minit termasuk penerangan lisan guru/murid; pemain yang membaca pantas boleh tamat lebih awal. Tiada pemasa menghukum.

## Jalankan

Perlu pelayar dengan WebGL 2. Semua pustaka dan aset disertakan; tiada CDN, backend, akaun atau kunci API.

1. Ekstrak ZIP.
2. Buka terminal dalam folder `bandar-harmoni`.
3. Jalankan `python3 -m http.server 8080` (Windows: `py -m http.server 8080`).
4. Buka `http://localhost:8080`.

Jangan klik terus fail HTML melalui `file://`; modul JavaScript memerlukan pelayan HTTP. Node.js pilihan sahaja: `npm start` menggunakan Python, `npm test` menjalankan ujian logik. Tiada proses build diperlukan.

## GitHub Pages

1. Muat naik **isi folder** projek ke akar repositori yang dipilih, termasuk `src`, `assets`, `index.html` dan `styles.css`.
2. Dalam GitHub, buka **Settings → Pages → Build and deployment**.
3. Pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, kemudian **Save**.
4. Tunggu GitHub menyediakan URL Pages dan buka URL tersebut.

Semua import, CSS dan aset menggunakan laluan relatif (`./`, `../`), jadi projek berfungsi di `https://NAMA.github.io/NAMA-REPO/`. Fail `.nojekyll` disertakan. Sebagai alternatif gunakan workflow manual `.github/workflows/pages.yml` selepas memilih sumber Pages **GitHub Actions**. Hanya gunakan satu kaedah penerbitan.

## Kawalan

- WASD/anak panah: gerakan relatif kepada skrin, diagonal dinormalkan.
- E atau Space: berinteraksi dengan NPC terdekat; Space juga mengaktifkan butang yang sedang fokus.
- Escape: jeda atau tutup dialog; dekati NPC semula untuk menyambung.
- Tablet: joystick kiri dan butang kanan; menyokong pointer berasingan.
- Tab/Shift+Tab/Enter: menu dan dialog. Peta dan Buku Misi menunjukkan lokasi/status.
- Kemajuan disimpan setiap dua saat ketika meneroka dan selepas setiap peringkat dialog. Simpanan setempat pada pelayar/peranti ini, bukan merentas peranti.

## Kandungan dan pentaksiran

SP 14.3, 14.4 dan 14.5. Keharmonian awal 40; setiap tindakan diselesaikan +10, penamat cabaran +2. Markah dikira daripada keadaan misi, bukan ditambah pada setiap klik, untuk mengelakkan ganjaran berganda.

Setiap misi: 1 bintang tindakan pertama; 1 bintang kesan **dan** alasan pertama; 1 bintang emosi pertama. Jawapan salah boleh dicuba lagi, dan keharmonian tetap boleh mencapai 100. Emosi watak menerima gembira atau lega. Emosi peribadi tidak diberi markah betul/salah.

Panduan Guru dalam permainan menyediakan soalan lisan, cadangan gilir peranti dan rekod percubaan. Guru perlu memerhatikan amalan sebenar semasa murid mendengar, berbincang dan menunggu giliran. Pilihan permainan sahaja bukan bukti lengkap SP 14.5.

## Struktur

- `src/world.js`: model bandar, pencahayaan, collision, papan tanda dan perubahan visual.
- `src/player.js`: avatar, animasi kaki/tangan, input papan kekunci dan joystick.
- `src/npcs.js`: penduduk, rutin dan lokasi selepas penyelesaian.
- `src/missions.js`: dialog lima misi, jawapan, keadaan dan pengiraan markah.
- `src/dialogue.js`: aliran pembelajaran dan percubaan semula.
- `src/ui.js`, `styles.css`: paparan dan komponen responsif.
- `src/main.js`: menu, gelung permainan, panduan guru, penamat dan sijil.
- `src/storage.js`: pengesahan dan simpanan selamat.
- `src/audio.js`: muzik/bunyi sintesis asli serta bacaan suara peranti.
- `assets/vendor`: Three.js 0.180.0 dan lesen MIT asal.
- `tests`: ujian logik keadaan, skor, muat semula dan collision/pelayar jika berkenaan.

## Menyunting dialog

Sunting objek dalam `src/missions.js`. `intro` dan `resolution` ialah pasangan `[nama, teks]`. `actions` mempunyai tiga pilihan; `correct` ialah indeks 0, 1 atau 2. Pilihan kesan dan alasan yang sesuai disimpan pada indeks 0. `feedback` mempunyai penerangan khusus untuk setiap tindakan kurang sesuai. Jangan gunakan HTML dalam teks: paparan menggunakan `textContent` untuk melindungi nama panggilan dan jawapan.

## Menambah misi

Versi ini direka untuk lima misi dan sasaran 100/15. Untuk misi tambahan:

1. Tambah objek data dengan `id` berturutan, `pos`, watak dan semua medan soalan.
2. Tambah mercu tanda/model dan collision dalam `world.js`; rutin khas dalam `npcs.js` jika perlu.
3. Ubah jumlah misi dalam pengesahan `storage.js`, jumlah HUD/sijil/penamat dalam `main.js`, serta formula `totals` agar tidak melebihi 100. Ubah nilai maksimum bintang kepada 3 × jumlah misi.
4. Naikkan versi/KEY simpanan supaya data lama tidak disalah tafsir. Laraskan kawasan peta mini dan sempadan jika peta dibesarkan.
5. Kemas kini dan jalankan ujian dengan semua peringkat, urutan, simpan/muat semula dan percubaan salah.

## Sijil

Sijil menggunakan nama panggilan dan bintang sebenar. Butang Cetak membuka dialog cetak pelayar; pilih **Simpan sebagai PDF** jika tersedia. Kertas A4 landscape disediakan melalui CSS cetakan. Sijil ialah penyertaan aktiviti, bukan pensijilan rasmi.

## Aset dan lesen

Semua model voxel, geometri bandar, ilustrasi watak dan bunyi sintesis dibuat secara prosedural untuk projek ini. Tiada aset Stardew Valley digunakan. Kod projek: MIT (lihat LICENSE). Three.js: MIT, kredit asal disertakan di `assets/vendor/THREE-LICENSE.txt`. Emoji dan font sistem dirender oleh peranti dan mungkin berbeza antara platform. Muzik menggunakan melodi sintesis ringkas; tiada fail rakaman pihak ketiga.

## Batasan sebenar

- Memerlukan WebGL 2; mesej alternatif dipaparkan jika renderer gagal.
- Bacaan `ms-MY` bergantung pada suara yang dipasang pada peranti. Tiada rakaman suara manusia disertakan.
- LocalStorage boleh disekat atau dipadam; permainan memberi makluman dan terus boleh dimainkan tanpa simpanan.
- Kawalan sentuhan diuji melalui emulasi pelayar; prestasi dan tingkah laku Safari pada iPad fizikal masih perlu diperiksa di peranti sekolah.
- Sambutan, pergerakan dan penyelesaian menggunakan animasi model voxel ringkas, bukan animasi sinematik.
- Lihat `TEST-REPORT.md` untuk ujian sebenar. Projek ini tidak diterbitkan secara automatik ke mana-mana repositori tanpa pemilihan sasaran.
