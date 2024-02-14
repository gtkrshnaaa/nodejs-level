const readline = require('readline');

// Membuat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mendefinisikan fungsi untuk menghitung jumlah huruf dalam sebuah kata
function hitungJumlahHuruf(kata) {
    const jumlahHuruf = {};

    kata = kata.toLowerCase();

    for (let huruf of kata) {
        if (huruf !== ' ') {
            jumlahHuruf[huruf] = (jumlahHuruf[huruf] || 0) + 1;
        }
    }

    return jumlahHuruf;
}

// Meminta input dari pengguna
rl.question('Masukkan sebuah kata: ', (kata) => {
    // Memanggil fungsi hitungJumlahHuruf untuk menghitung jumlah huruf dalam kata
    const jumlahHuruf = hitungJumlahHuruf(kata);

    // Menampilkan hasil perhitungan jumlah huruf
    console.log("Jumlah huruf dalam kata '" + kata + "':");
    for (let huruf in jumlahHuruf) {
        console.log(huruf + ": " + jumlahHuruf[huruf]);
    }

    // Menghitung jumlah total huruf
    let totalHuruf = 0;
    for (let huruf in jumlahHuruf) {
        totalHuruf += jumlahHuruf[huruf];
    }
    console.log("Total jumlah huruf: " + totalHuruf);

    // Menutup interface pembacaan input
    rl.close();
});
