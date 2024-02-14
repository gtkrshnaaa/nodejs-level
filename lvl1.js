// 1. Buat program Node.js sederhana yang menampilkan "Hello World!" di terminal.

// import module 'console' dari node.js
const console = require('console');

// menampilkan pesan "Hello World!" di terminal
console.log("Hello World!");

// versi menggunakan readline
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Fungsi untuk menampilkan pesan ke terminal
// function displayMessage(message) {
//     console.log(`pesan yang diinput user : ${message}`);
// }

// // Menggunakan readline untuk meminta input dari pengguna
// rl.question('Masukkan pesan yang ingin ditampilkan: ', (userInput) => {
//     // Menampilkan pesan yang dimasukkan oleh pengguna
//     displayMessage(userInput);

//     // Menutup interface readline setelah selesai
//     rl.close();
// });


// UNTUK 2 MASUKAN
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Fungsi untuk menampilkan pesan ke terminal
// function displayMessage(message1, message2) {
//   console.log(`Pesan yang diinput oleh pengguna pertama: ${message1}`);
//   console.log(`Pesan yang diinput oleh pengguna kedua: ${message2}`);
// }

// // Menggunakan readline untuk meminta dua input dari pengguna
// rl.question('Masukkan pesan pertama: ', (userInput1) => {
//   rl.question('Masukkan pesan kedua: ', (userInput2) => {
//     // Menampilkan pesan yang dimasukkan oleh pengguna
//     displayMessage(userInput1, userInput2);

//     // Menutup interface readline setelah selesai
//     rl.close();
//   });
// });



// AGAR rl.question TIDAK BERTUMPUK, MAKA KITA GUNAKAN ASYNC AWAIT

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk menampilkan pesan ke terminal
function displayMessage(message1, message2) {
  console.log(`Pesan yang diinput oleh pengguna pertama: ${message1}`);
  console.log(`Pesan yang diinput oleh pengguna kedua: ${message2}`);
}

// Fungsi untuk meminta input dari pengguna menggunakan Promise
function prompt(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

// Fungsi utama yang menggunakan async/await untuk membuat kode lebih sekuensial
async function main() {
  // Menggunakan async/await untuk meminta dua input dari pengguna secara berurutan
  const userInput1 = await prompt('Masukkan pesan pertama: ');
  const userInput2 = await prompt('Masukkan pesan kedua: ');

  // Menampilkan pesan yang dimasukkan oleh pengguna
  displayMessage(userInput1, userInput2);

  // Menutup interface readline setelah selesai
  rl.close();
}

// Memanggil fungsi utama
main();

