# Linktree Sederhana

Sebuah halaman profil sederhana dan bersih untuk menampilkan semua link penting Anda di satu tempat. Dibuat menggunakan Next.js dan Tailwind CSS (via CDN) agar ringan, cepat, dan sangat mudah untuk disesuaikan.

![Screenshot Project](https://files.catbox.moe/or64ak.png)
---

## 🚀 Fitur Utama

* **Super Cepat**: Dibuat sebagai halaman statis dengan Next.js.
* **Mudah Diedit**: Cukup ubah satu file (`data.json`) untuk memperbarui semua konten. Tidak perlu menyentuh kode!
* **Setup Simpel**: Menggunakan Tailwind CSS via CDN, tidak memerlukan proses build atau instalasi yang rumit.
* **Desain Minimalis**: Tampilan bersih dan modern dengan mode gelap permanen.

---

## 🛠️ Dibangun Dengan

* [Next.js](https://nextjs.org/) - Framework React untuk produksi.
* [React](https://react.dev/) - Library JavaScript untuk membangun antarmuka pengguna.
* [Tailwind CSS](https://tailwindcss.com/) - Framework CSS yang di-load melalui CDN.

---

## ⚙️ Cara Menjalankan Secara Lokal

Untuk menjalankan project ini di komputer Anda, ikuti langkah-langkah berikut.

### Prasyarat

Pastikan Anda sudah menginstal Node.js di sistem Anda.
* [Node.js](https://nodejs.org/) (versi 18.x atau lebih baru direkomendasikan)

### Instalasi

1.  **Clone repositori ini (jika sudah diunggah ke GitHub)**
    ```sh
    git clone [https://github.com/username-anda/nama-repo.git](https://github.com/username-anda/nama-repo.git)
    ```
    Atau cukup unduh file projectnya.

2.  **Masuk ke direktori project**
    ```sh
    cd nama-repo
    ```

3.  **Install dependensi Next.js** (hanya untuk Next.js, bukan untuk Tailwind)
    ```sh
    npm install
    ```

4.  **Jalankan server development**
    ```sh
    npm run dev
    ```
    Buka [http://localhost:3000](http://localhost:3000) di browser Anda untuk melihat hasilnya.

---

## 🎨 Kustomisasi

Bagian terbaik dari project ini adalah kemudahan kustomisasinya. Semua data profil dan link Anda tersimpan di satu tempat.

**Cukup buka dan edit file `public/data.json`:**

```json
{
  "name": "Ubah Nama Anda di Sini",
  "avatar": "Ganti dengan link foto profil Anda",
  "bio": "Ganti dengan deskripsi singkat Anda.",
  "links": [
    {
      "title": "Judul Link 1",
      "url": "[https://link-tujuan-1.com](https://link-tujuan-1.com)",
      "icon": "Ganti dengan link ke logo/ikon"
    },
    {
      "title": "Judul Link 2",
      "url": "[https://link-tujuan-2.com](https://link-tujuan-2.com)",
      "icon": "Ganti dengan link ke logo/ikon"
    }
  ]
}