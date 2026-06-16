# V-Phone 📱

Website toko smartphone online yang dibangun menggunakan HTML, CSS, dan JavaScript vanilla sebagai proyek mata kuliah Human-Computer Interaction (HCI).

## Halaman

| Halaman | File | Deskripsi |
|---|---|---|
| Home | `home.html` | Landing page dengan image slider dan produk rekomendasi |
| Shop | `shop.html` | Katalog produk yang difilter berdasarkan kategori |
| Deals & Offers | `offer.html` | Halaman keunggulan dan promo V-Phone |
| About Us | `aboutUs.html` | Informasi tentang perusahaan |
| Register | `register.html` | Form registrasi akun pengguna |

## Fitur

- **Image Slider** — Banner promosi otomatis berganti setiap 5 detik dengan navigasi manual
- **Katalog Produk** — Produk dikategorikan menjadi Combination, Gaming, Camera, dan Budgets
- **Form Validasi** — Validasi real-time pada form register (username, gender, email, password)
- **Hamburger Menu** — Navigasi responsif untuk tampilan mobile
- **Responsive Design** — Layout menyesuaikan ukuran layar

## Validasi Form Register

Form register memvalidasi:
- Username: 4–9 karakter, tidak boleh kosong
- Gender: wajib dipilih
- Email: harus mengandung `@` dan `.`
- Password: minimal 1 huruf kapital dan 1 karakter spesial
- Konfirmasi Password: harus sama dengan password

## Struktur File

```
hci/
├── home.html
├── shop.html
├── offer.html
├── aboutUs.html
├── register.html
├── styleHome.css
├── styleShop.css
├── styleOff.css
├── styleAbt.css
├── styleReg.css
├── scriptSlider.js
├── scriptHamburg.js
├── scriptValid.js
└── assets/         (gambar produk & ilustrasi)
```

## Teknologi

- **HTML5** — Struktur halaman
- **CSS3** — Styling dan layout responsif
- **JavaScript** — Interaktivitas (slider, hamburger menu, form validation)

## Cara Menjalankan

Tidak memerlukan instalasi apapun. Cukup buka file `home.html` di browser.

```
Buka home.html → jalankan langsung di browser
```

---

&copy; 2024 V-Phone Smartphone Store