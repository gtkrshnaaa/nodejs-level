// 9. Buat program Node.js sederhana untuk mencari akar kuadrat dari sebuah bilangan.

// Import modul 'readline' untuk membaca input dari pengguna
const readline = require('readline');

// Membuat interface untuk membaca input dari terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menghitung akar kuadrat dari sebuah bilangan
function hitungAkarKuadrat(bilangan) {
  return Math.sqrt(bilangan);
}

// Meminta pengguna memasukkan bilangan
rl.question('Masukkan bilangan: ', (input) => {
  // Mengonversi input menjadi bilangan float
  const bilangan = parseFloat(input);

  // Memeriksa apakah input valid
  if (isNaN(bilangan)) {
    console.log('Input tidak valid. Masukkan bilangan yang valid.');
  } else if (bilangan < 0) {
    console.log('Bilangan harus non-negatif.');
  } else {
    // Menghitung akar kuadrat dan mencetak hasilnya
    const akarKuadrat = hitungAkarKuadrat(bilangan);
    console.log(`Akar kuadrat dari ${bilangan} adalah ${akarKuadrat}`);
  }

  // Menutup interface readline
  rl.close();
});
