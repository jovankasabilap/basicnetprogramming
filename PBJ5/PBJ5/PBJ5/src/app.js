const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

// Mendefinisikan direktori untuk public, views, dan partials
const direktoriPublic = path.join(__dirname, '../public');
const direktoriViews = path.join(__dirname, '../templates/views');
const direktoriPartials = path.join(__dirname, '../templates/partials'); // Pastikan jalur ini benar

// Tambahkan log untuk memastikan jalur views benar
console.log(direktoriViews); // Tambahkan ini untuk debugging

app.set('view engine', 'hbs');
app.set('views', direktoriViews);
hbs.registerPartials(direktoriPartials); 

app.use(express.static(direktoriPublic));

// Halaman utama
app.get('/', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Jovanka Sabila Pertiwi'
    });
});

// app.get('/', (req, res) => {
//     res.render('index', { nama: 'Jovanka Sabila Pertiwi' });
//   });
  

// Halaman bantuan/FAQ
app.get('/bantuan', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Jovanka Sabila Pertiwi',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan'
    });
});

// Halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    res.send([{
        PrediksiCuaca: 'Cuaca Sedang Hujan',
        lokasi: 'Padang'
    }]);
});

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Jovanka Sabila Pertiwi'
    });
});

// Penanganan rute yang tidak ditemukan
app.get('*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Jovanka Sabila Pertiwi',
        pesanKesalahan: 'Halaman tidak ditemukan'
    });
});


// Menjalankan server
app.listen(3000, () => {
    console.log('Server berjalan pada port 3000.');
});


    

