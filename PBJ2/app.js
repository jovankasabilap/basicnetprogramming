const fs = require('fs')
fs.writeFileSync('catatan.txt', 'Nama Saya Jovanka Sabila Pertiwi')
//fs.appendFileSync('catatan.txt', 'Saya tinggal di Bengkalis')

const catatan = require('./catatan.js')
const pesan1 = catatan()
console.log(pesan1)
const validator = require('validator');
const ambilCatatan = require('./catatan.js');
const pesan2 = ambilCatatan(); 
console.log(pesan2);
console.log(validator.isURL('https://proska.com'));

const chalk = require('chalk');
console.log(chalk.blue('print warna biru sukses'));

console.log(chalk.yellow('print warna kuning sukses'));
console.log(chalk.bgYellow.black('print dengan latar belakang kuning dan teks hitam'));
console.log(chalk.green.bold('print warna hijau dengan teks tebal'));
console.log(chalk.cyan.underline('print warna cyan dengan garis bawah'));

