// const fs = require('fs')
// fs.writeFileSync('catatan.txt', 'Nama Saya Jovanka Sabila Pertiwi')
// //fs.appendFileSync('catatan.txt', 'Saya tinggal di Bengkalis')

// //const catatan = require('./catatan.js')
// //const pesan1 = catatan()
// //console.log(pesan1)

// const validator = require('validator');
// //const catatan = require('./catatan.js')
// //const pesan2 = catatan()
// //console.log(pesan2)
// console.log(validator.isURL('https://proska.com'));

// const chalk = require('chalk');
// console.log(chalk.blue('print warna biru sukses'));

// console.log(chalk.yellow('print warna kuning sukses'));
// console.log(chalk.bgYellow.black('print dengan latar belakang kuning dan teks hitam'));
// console.log(chalk.green.bold('print warna hijau dengan teks tebal'));
// console.log(chalk.cyan.underline('print warna cyan dengan garis bawah'));

// const ambilCatatan = require('./catatan.js')

// const command = process.argv[2]
// console.log(process.argv)

// if (command === 'tambah') {
// console.log('Tambah Catatan')
// } else if (command === 'hapus') {
// console.log('Hapus Catatan')
// }

const chalk = require('chalk');
const yargs = require('yargs');
const catatan = require('./catatan.js'); // Mengimpor module catatan

// Kustomisasi versi yargs
yargs.version('10.1.0');

// Membuat perintah 'tambah'
yargs.command({
    command: 'tambah',
    describe: 'Tambah sebuah catatan baru',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        },
        isi: {
            describe: 'Isi catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.tambahCatatan(argv.judul, argv.isi);
        console.log(chalk.green(`Catatan berhasil ditambahkan! Judul: ${argv.judul}`));
    }
});

// Perintah 'hapus'
yargs.command({
    command: 'hapus',
    describe: 'Hapus catatan',
    builder: {
        judul: {
            describe: 'Judul catatan',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        catatan.hapusCatatan(argv.judul);
        console.log(chalk.green(`Catatan dengan judul '${argv.judul}' berhasil dihapus!`));
    }
});

// Perintah 'list' untuk menampilkan semua catatan
yargs.command({
    command: 'list',
    describe: 'Menampilkan daftar semua catatan',
    handler: function () {
        console.log(chalk.blue('Daftar semua catatan:'));
        catatan.tampilkanSemuaCatatan(); // Menggunakan fungsi dari 'catatan.js'
    }
});

// Perintah 'baca' untuk membaca sebuah catatan
yargs.command({
    command: 'baca',
    describe: 'Baca sebuah catatan',
    builder: {
        judul: {
            describe: 'Judul catatan yang ingin dibaca',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(`Membaca catatan dengan judul: ${argv.judul}`);
        catatan.bacaCatatan(argv.judul); // Menggunakan fungsi dari 'catatan.js'
    }
});

// Memanggil yargs untuk mem-parsing input
yargs.parse();

