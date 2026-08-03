# 🏥 Sistem Manajemen Catatan Medis Rumah Sakit

> Aplikasi web berbasis **Google Apps Script (GAS)** untuk mengelola data pasien dan rekam medis secara digital menggunakan **Google Spreadsheet** sebagai media penyimpanan data.

![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-4285F4?style=for-the-badge\&logo=google\&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)
![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge\&logo=googlesheets\&logoColor=white)

---

# 📌 Deskripsi

Sistem Manajemen Catatan Medis Rumah Sakit merupakan aplikasi berbasis **Google Apps Script (Web App)** yang dikembangkan untuk membantu proses administrasi rumah sakit atau klinik dalam mengelola data pasien dan rekam medis secara terstruktur.

Aplikasi ini memanfaatkan **Google Spreadsheet** sebagai basis penyimpanan data sehingga tidak memerlukan server maupun database tambahan. Seluruh proses pengolahan data dilakukan melalui **Code.gs**, sedangkan antarmuka aplikasi dibangun menggunakan **HTML**.

Aplikasi dirancang agar sederhana, mudah digunakan, dan mudah dikembangkan sehingga cocok digunakan sebagai media pembelajaran, proyek portofolio, maupun implementasi sistem administrasi skala kecil.

---

# ✨ Fitur Utama

| Fitur                             | Deskripsi                                                                                               |
| --------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 👤 **Manajemen Data Pasien**      | Menambahkan, mengubah, menghapus, dan menampilkan data pasien secara lengkap.                           |
| 📝 **Input Manual Data Pasien**   | Pencatatan data pasien baru melalui formulir digital dengan validasi data.                              |
| 🩺 **Manajemen Rekam Medis**      | Mengelola diagnosis, tindakan medis, poli tujuan, tanggal kunjungan, serta informasi pelayanan pasien.  |
| 📜 **Riwayat Kunjungan Pasien**   | Menampilkan histori kunjungan pasien berdasarkan data yang tersimpan.                                   |
| 🔍 **Pencarian & Filter Data**    | Filter berdasarkan nama pasien, NIK, tanggal kunjungan, poli, status pembayaran, dan status kunjungan.  |
| 📊 **Dashboard Statistik**        | Menampilkan ringkasan data pasien, jumlah kunjungan, distribusi poli, serta informasi penting lainnya.  |
| 💰 **Statistik Pembayaran**       | Rekap metode pembayaran, status pembayaran, dan total transaksi pelayanan.                              |
| 🦠 **Statistik Kondisi Penyakit** | Menampilkan distribusi diagnosis atau penyakit yang tercatat pada sistem.                               |
| 📅 **Laporan Bulanan**            | Rekap data kunjungan, pembayaran, tindakan medis, dan aktivitas pelayanan berdasarkan periode tertentu. |
| 📄 **Export PDF**                 | Mengekspor laporan maupun rekam medis ke format PDF.                                                    |
| 📑 **Export Microsoft Excel**     | Mengekspor data pasien ke format Microsoft Excel.                                                       |
| 🖨️ **Cetak Rekam Medis**         | Mencetak data rekam medis pasien dalam format yang siap digunakan sebagai arsip.                        |
| ☁️ **Penyimpanan Otomatis**       | Penyimpanan data secara otomatis ke Google Spreadsheet.                                                 |
| 🔒 **Validasi Data**              | Validasi input sebelum data disimpan ke sistem.                                                         |
| ⚡ **Web Based Application**       | Dapat diakses melalui browser tanpa instalasi aplikasi tambahan.                                        |

---

# 🛠️ Teknologi yang Digunakan

| Teknologi          | Fungsi                                |
| ------------------ | ------------------------------------- |
| Google Apps Script | Backend, Web App, dan logika aplikasi |
| HTML               | Antarmuka pengguna                    |
| Google Spreadsheet | Penyimpanan data                      |

---

# 📂 Struktur Proyek

```text
📦 Hospital-Medical-Record
│
├── Code.gs
├── Index.html
└── README.md
```

### Penjelasan File

| File           | Deskripsi                                                                                                            |
| -------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Code.gs**    | Berisi seluruh logika aplikasi, proses CRUD, komunikasi dengan Google Spreadsheet, serta deployment sebagai Web App. |
| **Index.html** | Halaman utama aplikasi yang menampilkan antarmuka pengguna.                                                          |
| **README.md**  | Dokumentasi proyek.                                                                                                  |

---

# 📊 Struktur Data

| Kolom             | Keterangan                    |
| ----------------- | ----------------------------- |
| nama_pasien       | Nama lengkap pasien           |
| nik               | Nomor Induk Kependudukan      |
| jenis_kelamin     | L / P                         |
| umur              | Umur pasien                   |
| gol_darah         | Golongan darah                |
| alamat            | Alamat pasien                 |
| tanggal           | Tanggal kunjungan             |
| poli              | Poli tujuan                   |
| diagnosis         | Hasil diagnosis dokter        |
| tindakan          | Tindakan medis                |
| total_biaya       | Total biaya pelayanan         |
| metode_pembayaran | Tunai, BPJS, Asuransi         |
| status_pembayaran | Lunas / Belum Lunas           |
| status_kunjungan  | Rawat Jalan, Kontrol, Selesai |

---

# 🚀 Cara Menjalankan

### 1. Buat Google Spreadsheet

Buat spreadsheet baru sebagai database aplikasi.

### 2. Buat Project Google Apps Script

* Buka Google Drive.
* Pilih **New → Google Apps Script**.
* Salin isi `Code.gs`.
* Tambahkan file `Index.html`.

### 3. Hubungkan Spreadsheet

Masukkan Spreadsheet ID ke dalam `Code.gs`.

### 4. Deploy Web App

1. Klik **Deploy**.
2. Pilih **New Deployment**.
3. Pilih **Web App**.
4. Atur hak akses.
5. Klik **Deploy**.
6. Gunakan URL Web App yang dihasilkan.

---

# 🔄 Alur Sistem

```text
Pengguna
     │
     ▼
Index.html
     │
     ▼
Google Apps Script (Code.gs)
     │
     ▼
Google Spreadsheet
```

---

# 🎯 Tujuan Pengembangan

* Digitalisasi administrasi rumah sakit.
* Mempermudah pengelolaan rekam medis pasien.
* Mengurangi pencatatan manual.
* Menyediakan sistem berbasis cloud yang ringan.
* Menjadi media pembelajaran Google Apps Script.
* Menjadi proyek portofolio pengembangan aplikasi web.

---

# 🔐 Keamanan Data

* Validasi data sebelum penyimpanan.
* Penyimpanan terpusat pada Google Spreadsheet.
* Hak akses dapat diatur melalui Google Workspace.
* Meminimalkan kesalahan input data.

---

# 🚀 Roadmap Pengembangan

Fitur yang dapat ditambahkan pada versi berikutnya:

* 👥 Login Multi User
* 🔑 Hak Akses Admin
* 📸 Upload Foto Pasien
* 📂 Upload Dokumen Medis
* 📈 Dashboard Grafik Interaktif
* 🔔 Notifikasi Jadwal Kontrol
* 📱 QR Code Rekam Medis
* ☁️ Backup Otomatis
* 📧 Notifikasi Email
* 📁 Integrasi Google Drive
* 🌙 Dark Mode
* 📱 Tampilan Responsif Mobile

---

# 🤝 Kontribusi

Kontribusi sangat terbuka.

1. Fork repository.
2. Buat branch baru.
3. Lakukan perubahan.
4. Commit perubahan.
5. Push ke repository.
6. Buat Pull Request.

---

# 📄 Lisensi

Proyek ini dikembangkan sebagai media pembelajaran dan portofolio. Silakan digunakan, dipelajari, maupun dimodifikasi sesuai kebutuhan dengan tetap memberikan atribusi kepada pengembang.

---

# 👨‍💻 Developer

**Junior Alfredo Benerd Setiawan**

SMK Negeri 6 Surakarta
Program Keahlian Rekayasa Perangkat Lunak (RPL)

Dikembangkan menggunakan **Google Apps Script**, **HTML**, dan **Google Spreadsheet** untuk membangun aplikasi manajemen catatan medis rumah sakit yang ringan, cepat, dan mudah digunakan.
