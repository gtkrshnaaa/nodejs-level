// 6. Buat program Node.js sederhana untuk menghitung nilai rata-rata dari tiga bilangan.

// Import modul readline untuk menerima input dari pengguna
const readline = require('readline');

// Membuat interface pembacaan input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk meminta input bilangan
function inputBilangan(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (input) => {
      resolve(parseFloat(input)); // Mengonversi string input ke tipe bilangan
    });
  });
}

// Fungsi utama untuk menghitung rata-rata
async function hitungRataRata() {
  // Meminta pengguna memasukkan tiga bilangan secara berurutan
  const bilangan1 = await inputBilangan('Masukkan bilangan pertama: ');
  const bilangan2 = await inputBilangan('Masukkan bilangan kedua: ');
  const bilangan3 = await inputBilangan('Masukkan bilangan ketiga: ');

  // Menghitung rata-rata dari tiga bilangan
  const rataRata = (bilangan1 + bilangan2 + bilangan3) / 3;

  // Menampilkan hasil rata-rata
  console.log(`Rata-rata dari ${bilangan1}, ${bilangan2}, dan ${bilangan3} adalah: ${rataRata}`);

  // Menutup interface pembacaan input
  rl.close();
}

// Memanggil fungsi utama untuk menghitung rata-rata
hitungRataRata();
