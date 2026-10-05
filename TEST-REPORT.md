# Laporan Ujian — Bandar Harmoni 3D

Tarikh: 6 Oktober 2026 (Malaysia).

## Ujian dilaksanakan

| Ujian | Keputusan |
|---|---|
| Keadaan awal | 40 keharmonian, 0 bintang, 0 misi |
| Semua 120 susunan lima misi (ujian logik) | Setiap susunan mencapai tepat 100/15/5 |
| Ganjaran dipanggil semula | Tidak menambah markah selepas peringkat selesai |
| Salah dahulu bagi semua jenis soalan | Boleh tamat dengan 100 keharmonian, 0 bintang |
| Serialisasi/muat semula selepas peringkat tindakan dan justifikasi | Kemajuan sah; tiada ganjaran berulang |
| Data rosak / versi salah / peringkat tidak konsisten | Ditolak dengan selamat |
| Kedudukan simpanan tidak sah | Dikembalikan ke kedudukan selamat |
| LocalStorage disekat atau JSON rosak | Fungsi baca/simpan gagal secara selamat |
| Pelayar Chromium dengan WebGL melalui perisian | Dunia 3D berjaya dirender, tiada ralat JavaScript semasa aliran diuji |
| Lima misi melalui butang UI, urutan 5 → 1 → 3 → 2 → 4 | Lengkap; HUD 100/100, 15/15, 5/5; penamat dipaparkan |
| Muat semula antara misi | Kemajuan disambung |
| Jawapan tindakan salah → cuba lagi → betul | Maklum balas muncul; keharmonian +10, bintang tindakan tidak diberi |
| Muat semula ketika dialog selepas tindakan +10 | Sambung dialog penyelesaian; keharmonian kekal 50 |
| Pergerakan papan kekunci dan E | Bergerak dan membuka dialog penduduk berhampiran |
| Joystick sentuhan (emulasi CDP) | Kedudukan pemain berubah melalui sentuhan sebenar pelayar |
| Collision bangunan dewan, air pancut dan sempadan | Kedudukan terhalang ditolak |
| Carian laluan grid berasaskan collision sebenar | Kelima-lima titik pendekatan boleh dicapai; 5,087 nod boleh dilalui |
| Paparan 1280×800 dan tablet 1024×768 | Menu, HUD dan dunia dirender |
| Paparan portrait 390×844 | Dialog dan penamat tidak melimpah secara mendatar; panel boleh ditatal |
| Sijil | Menggunakan markah sebenar; PDF berjaya dijana melalui enjin cetak Chromium |
| URL subfolder `/bandar-harmoni/` | Semua modul, CSS dan Three.js dimuatkan; tiada CDN diperlukan |

## Menjalankan semula

Ujian logik tidak memerlukan pakej tambahan:

```bash
npm test
```

Ujian pelayar pilihan memerlukan Playwright dan Chromium:

```bash
npm install --no-save playwright
npx playwright install chromium
```

Hidupkan pelayan projek pada port 8080, kemudian jalankan `node tests/browser.cjs` dari folder projek. Untuk `tests/edge-browser.cjs`, hidupkan pelayan pada port 8081 dari **folder induk** yang mengandungi folder `bandar-harmoni`; ujian itu mengesahkan URL subfolder. Skrip pelayar menulis tangkapan skrin/PDF dalam `tests/`.

Dalam persekitaran pembinaan, Chromium dibekalkan melalui pakej binari setempat dan WebGL SwiftShader. Skrip penghantaran menggunakan pemasangan Playwright biasa untuk kemudahan pengguna.

## Batasan yang belum disahkan

- Belum diuji pada iPad fizikal, Safari, atau peranti sekolah berprestasi rendah. Ujian emulasi sentuhan bukan pengganti pengujian peranti sebenar.
- Sentuhan joystick diuji; penggunaan berbilang jari serentak disokong melalui Pointer Events tetapi belum diuji pada perkakasan fizikal.
- Bahasa dan mutu suara `ms-MY`, emoji serta cetak PDF bergantung pada peranti. Renderer ujian tidak mempunyai semua fon emoji; label teks tetap tersedia.
- Tiada penanda aras FPS iPad. Model ringkas, nisbah piksel maksimum 1.5, tiada bayang dinamik atau pascapemprosesan digunakan.
- Belum diterbitkan ke GitHub Pages; fungsi laluan subfolder disahkan pada pelayan HTTP tempatan. Workflow disediakan tetapi belum dijalankan di GitHub.
