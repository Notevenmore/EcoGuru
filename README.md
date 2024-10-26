# EcoGuru

**EcoGuru** adalah aplikasi berbasis mobile yang dibangun menggunakan **React Native**, dirancang untuk memfasilitasi layanan antar jemput sampah antara waste collector dan rumah tangga. Tujuan dari aplikasi ini adalah untuk meningkatkan kesadaran tentang pengelolaan sampah serta menyediakan solusi ramah lingkungan untuk layanan penjemputan sampah.

Backend aplikasi ini menggunakan **ExpressJS**, dan data disimpan menggunakan **PostgreSQL**.

## Fitur Utama

### 1. Autentikasi Pengguna
**Autentikasi pengguna** adalah proses di mana pengguna harus memverifikasi identitas mereka sebelum mendapatkan akses ke aplikasi. Ini memastikan bahwa hanya pengguna yang sah yang dapat menggunakan fitur-fitur dalam aplikasi. Autentikasi dilakukan melalui proses login menggunakan **Username** dan **password** yang telah di enkripsi.
Dengan adanya autentikasi ini, aplikasi **EcoGuru** menjamin keamanan data pribadi pengguna dan mencegah akses dari pihak yang tidak berwenang.

<table align="center" style="border: none;">
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/36f37044-8a23-4e69-a463-16866cb9b615" alt="Peta Lokasi Penjemputan" width="300" />
      <br>
      <b>Gambar 1:</b> Halaman Registrasi akun
    </td>
    <td align="center" style="border: none;">
      <img src="https://github.com/user-attachments/assets/385a4c1d-9046-49e0-8835-18f173b0d2d3" alt="Autentikasi Pengguna" width="300" />
      <br>
      <b>Gambar 2:</b> Halaman login aplikasi 
    </td>
  </tr>
</table>

### 2. Autorisasi Pengguna
**Autorisasi pengguna** adalah proses yang terjadi setelah autentikasi berhasil dilakukan. Autorisasi menentukan **hak akses** pengguna, yaitu fitur atau data apa saja yang dapat diakses oleh pengguna dalam aplikasi. Misalnya, pengguna biasa hanya dapat mengakses fitur penjemputan sampah dan melihat poin mereka, sementara admin memiliki akses ke pengaturan dan manajemen pengguna lain.

Fitur ini sangat penting untuk membatasi akses hanya pada fitur yang relevan untuk setiap jenis pengguna, serta melindungi informasi dan operasi sensitif dalam aplikasi.
<table align="center" style="border: none;">
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/b710efdc-f5b6-41ba-885d-451a3983392f" alt="Autorisasi Pengguna" />
      <br>
      <b>Gambar 1:</b> Halaman Beranda Household
    </td>
    <td align="center" style="border: none;">
      <img src="https://github.com/user-attachments/assets/2888ad33-b1f7-4f48-90b7-82a23bab2279" />
      <br>
      <b>Gambar 2:</b> Halaman Beranda Waste Collector
    </td>
  </tr>
</table>

Dengan kedua proses ini—autentikasi dan autorisasi—**EcoGuru** menjamin bahwa setiap akses ke aplikasi dilakukan oleh pengguna yang benar-benar terverifikasi dan hanya mengizinkan mereka mengakses fitur sesuai dengan peran atau hak akses mereka.

### 3. Profil Pengguna
#### Tampilan Profil Pengguna
Fitur ini memungkinkan pengguna untuk melihat informasi pribadi mereka yang telah terdaftar dalam aplikasi. Di halaman ini, pengguna dapat melihat detail seperti nama, alamat, nomor telepon, dan riwayat penukaran sampah yang telah dilakukan. Tampilan profil ini dirancang untuk memberikan kemudahan akses informasi yang relevan kepada pengguna.
<table align="center" style="border: none;">
  <tr>
    <td align="center" style="border: none;">
      <img src="https://github.com/user-attachments/assets/538dcad3-71f7-453d-bd87-afa1bcefff12" />
      <br>
      <b>Gambar 1:</b> Halaman Profil Pengguna
    </td>
  </tr>
</table>

#### Edit Profil
Fitur ini memberikan kesempatan kepada pengguna untuk memperbarui informasi pribadi mereka. Pengguna dapat mengubah nama, alamat, dan nomor telepon sesuai dengan kebutuhan. Dengan fitur ini, pengguna dapat memastikan bahwa informasi yang mereka berikan selalu akurat dan terkini. Setelah melakukan perubahan, pengguna akan menerima notifikasi bahwa profil mereka telah diperbarui dengan sukses.
<table align="center" style="border: none;">
  <tr>
    <td align="center" style="border: none;">
      <img src="https://github.com/user-attachments/assets/bcf2cd78-1292-4373-8b9a-5b3e0ce4f60b" />
      <br>
      <b>Gambar 2:</b> Halaman Edit Profil Pengguna
    </td>
  </tr>
</table>

#### Edit Password
Fitur ini memungkinkan pengguna untuk mengganti kata sandi akun mereka dengan yang baru. Pengguna harus memasukkan kata sandi lama, kemudian diikuti dengan kata sandi baru dan konfirmasi kata sandi baru. Fitur ini penting untuk meningkatkan keamanan akun pengguna dan mencegah akses yang tidak sah. Pengguna juga akan diberikan notifikasi jika penggantian kata sandi berhasil atau jika terdapat kesalahan dalam proses penggantian.
<table align="center" style="border: none;">
  <tr>
    <td align="center" style="border: none;">
      <img src="https://github.com/user-attachments/assets/49fabbda-9aaa-426c-be6e-d71e7a51587a" />
      <br>
      <b>Gambar 3:</b> Halaman Edit Password akun Pengguna
    </td>
  </tr>
</table>

### 4. Lupa Password
Fitur ini memungkinkan pengguna yang lupa kata sandi mereka untuk melakukan pemulihan akun dengan cara yang aman. Pengguna akan diminta untuk menjawab pertanyaan keamanan yang telah mereka tentukan saat proses registrasi. Dengan menjawab pertanyaan tersebut dengan benar, pengguna dapat mengatur ulang kata sandi mereka. 

Proses ini dirancang untuk melindungi akun pengguna dari akses yang tidak sah dan memastikan bahwa hanya pemilik akun yang dapat melakukan reset kata sandi. Setelah berhasil menjawab pertanyaan keamanan, pengguna akan diberikan opsi untuk memasukkan kata sandi baru dan mengonfirmasi perubahan tersebut. Notifikasi akan dikirimkan kepada pengguna setelah kata sandi berhasil direset, memastikan bahwa mereka diinformasikan mengenai perubahan yang telah dilakukan.
<table align="center" style="border: none;">
  <tr>
    <td align="center" style="border: none;">
      <img src="https://github.com/user-attachments/assets/33039f03-d0dd-491f-8aaa-70ca042e437a" />
      <br>
      <b>Gambar 1:</b> Halaman Lupa Password akun pengguna
    </td>
    <td align="center" style="border: none;">
      <img src="https://github.com/user-attachments/assets/30063e84-d837-42f0-b3f2-2d609031671d" />
      <br>
      <b>Gambar 2:</b> Halaman Verifikasi akun pengguna
    </td>
    <td align="center" style="border: none;">
      <img src="https://github.com/user-attachments/assets/78b72c0b-8efe-4c2e-99d8-e27c68f9ff67" />
      <br>
      <b>Gambar 3:</b> Halaman Ganti password akun pengguna
    </td>
  </tr>
</table>
