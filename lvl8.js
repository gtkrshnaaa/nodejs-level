// 8. Buat program Node.js sederhana untuk menentukan apakah suatu bilangan prima atau tidak.

// Import modul readline untuk menerima input dari pengguna
const readline = require('readline');

// Membuat interface pembacaan input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fungsi untuk memeriksa apakah suatu bilangan prima
function cekBilanganPrima(bilangan) {
    if (bilangan <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(bilangan); i++) {
        if (bilangan % i === 0) {
            return false;
        }
    }
    return true;
}

// Meminta pengguna memasukkan bilangan
rl.question('Masukkan bilangan: ', (input) => {
    const bilangan = parseInt(input);

    // Memeriksa apakah bilangan prima atau tidak
    if (cekBilanganPrima(bilangan)) {
        console.log(`${bilangan} adalah bilangan prima.`);
    } else {
        console.log(`${bilangan} bukan bilangan prima.`);
    }

    // Menutup interface pembacaan input
    rl.close();
});
