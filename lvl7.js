// 7. Buat program Node.js sederhana untuk menentukan bilangan terbesar dari dua bilangan.

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

// Fungsi utama untuk menentukan bilangan terbesar
async function cariBilanganTerbesar() {
  // Meminta pengguna memasukkan dua bilangan secara berurutan
  const bilangan1 = await inputBilangan('Masukkan bilangan pertama: ');
  const bilangan2 = await inputBilangan('Masukkan bilangan kedua: ');

  // Menentukan bilangan terbesar
  const bilanganTerbesar = Math.max(bilangan1, bilangan2);

  // Menampilkan bilangan terbesar
  console.log(`Bilangan terbesar adalah: ${bilanganTerbesar}`);

  // Menutup interface pembacaan input
  rl.close();
}

// Memanggil fungsi utama untuk menentukan bilangan terbesar
cariBilanganTerbesar();
