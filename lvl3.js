// 3. Buat program Node.js sederhana untuk menentukan apakah sebuah bilangan ganjil atau genap.


// mendefinisikan bilangan yang akan diperiksa
// const bilangan = 10;

// // fungsi untuk menentukan apakah bilangan adalah ganjil atau genap
// function cekGanjilGenap (bilangan) {
//     if (bilangan % 2 === 0) {
//         return "genap";
//     }
//     else {
//         return "ganjil";
//     }
// }

// // menampilkan hasil pengecekan di terminal
// console.log(`${bilangan} adalah bilangan ${cekGanjilGenap(bilangan)}.`);




// versi input dari user
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menentukan apakah bilangan adalah ganjil atau genap
function cekGanjilGenap(bilangan) {
  if (bilangan % 2 === 0) {
    return "genap";
  } else {
    return "ganjil";
  }
}

// Menggunakan readline untuk meminta input bilangan dari pengguna
rl.question('Masukkan bilangan: ', (userInput) => {
  // Mengonversi input menjadi angka (integer)
  const bilangan = parseInt(userInput);

  // Memeriksa apakah input valid (bukan NaN)
  if (!isNaN(bilangan)) {
    // Menampilkan hasil pengecekan di terminal
    console.log(`${bilangan} adalah bilangan ${cekGanjilGenap(bilangan)}.`);
  } else {
    // Menampilkan pesan kesalahan jika input tidak valid
    console.log('Mohon masukkan bilangan yang valid.');
  }

  // Menutup interface readline setelah selesai
  rl.close();
});
