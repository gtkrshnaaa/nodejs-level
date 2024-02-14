// 2. Buat program Node.js sederhana untuk menjumlahkan dua bilangan.

// // mendefinisikan dua bilangan yang akan dijumlahkan
// const bilangan1 = 4;
// const bilangan2 = 2;

// // melakukan penjumlahan
// const hasilPenjumlahan = bilangan1 + bilangan2;

// // menampilkan hasil penjumlahan di terminal
// console.log(`Hasil penjumlahan ${bilangan1} + ${bilangan2} adalah ${hasilPenjumlahan}.`);

// versi inputan user


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Menggunakan readline untuk meminta input dua bilangan dari pengguna
// rl.question('Masukkan bilangan pertama: ', (inputBilangan1) => {
//   rl.question('Masukkan bilangan kedua: ', (inputBilangan2) => {
//     // Mengonversi input menjadi angka (float)
//     const bilangan1 = parseFloat(inputBilangan1);
//     const bilangan2 = parseFloat(inputBilangan2);

//     // Memeriksa apakah input valid (bukan NaN)
//     if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
//       // Melakukan penjumlahan
//       const hasilPenjumlahan = bilangan1 + bilangan2;

//       // Menampilkan hasil penjumlahan di terminal
//       console.log(`Hasil penjumlahan ${bilangan1} + ${bilangan2} adalah ${hasilPenjumlahan}.`);

//       // Menutup interface readline setelah selesai
//       rl.close();
//     } else {
//       // Menampilkan pesan kesalahan jika input tidak valid
//       console.log('Mohon masukkan bilangan yang valid.');
//       // Menutup interface readline
//       rl.close();
//     }
//   });
// });



// KARENA rl.question BERTUMPUK, MAKA KITA GUNAKAN ASYNC AWAIT

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi inp yang mengembalikan Promise untuk memungkinkan penggunaan async/await
function inp(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// Fungsi utama yang menggunakan async/await untuk membuat kode lebih sekuensial
async function main() {
  // Menggunakan inp() untuk meminta input bilangan pertama dari pengguna
  const inputBilangan1 = await inp('Masukkan bilangan pertama: ');

  // Menggunakan inp() untuk meminta input bilangan kedua dari pengguna
  const inputBilangan2 = await inp('Masukkan bilangan kedua: ');

  // Mengonversi input menjadi angka (float)
  const bilangan1 = parseFloat(inputBilangan1);
  const bilangan2 = parseFloat(inputBilangan2);

  // Memeriksa apakah input valid (bukan NaN)
  if (!isNaN(bilangan1) && !isNaN(bilangan2)) {
    // Melakukan penjumlahan
    const hasilPenjumlahan = bilangan1 + bilangan2;

    // Menampilkan hasil penjumlahan di terminal
    console.log(`Hasil penjumlahan ${bilangan1} + ${bilangan2} adalah ${hasilPenjumlahan}.`);
  } else {
    // Menampilkan pesan kesalahan jika input tidak valid
    console.log('Mohon masukkan bilangan yang valid.');
  }

  // Menutup interface readline setelah selesai
  rl.close();
}

// Memanggil fungsi utama
main();
