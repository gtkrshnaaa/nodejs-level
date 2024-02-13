// [ ] 4. Buat program Node.js sederhana untuk menghitung luas lingkaran.


// import module readline untuk membaca input dari pengguna
const readline = require('readline');

// membuat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// fungsi menghitung luas lingkaran
function hitungLuasLingkaran(jariJari) {
    const luas = Math.PI * Math.pow(jariJari, 2);
    return luas;
}

// menggunakan readline untuk meminta input jari-jari dari pengguna
rl.question('masukan jari-jari lingkaran : ', (inputJariJari) => {
    // mengonversi input menjadi angka (float)
    const jariJari = parseFloat(inputJariJari);

    // memeriksa apakah input valid
    if (!isNaN(jariJari)) {
        // menghitung luas jari-jari lingkaran
        const luasLingkaran = hitungLuasLingkaran(jariJari);

        // menampilkan hasil
        console.log(`luas lingkaran dengan jari-jari ${jariJari} adalah : ${luasLingkaran.toFixed(2)}`);
        
        // menutup interface readline setelah selesai
        rl.close();
    }

    else {
        // menampilkan pesan kesalahan jika input tidak valid
        console.log('mohon masukan angka yang valid')

        // menutup interface readline
        rl.close();
    }

})