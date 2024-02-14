// 5. Buat program Node.js sederhana untuk mengubah suhu dari Fahrenheit ke Celsius.

// import modul readline untuk membaca input dari pengguna
const readline = require('readline');

// membuat interface untuk membaca input dari pengguna
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// fungsi untuk mengubah suhu dari Fahrenheit ke Celcius
function fahrenheitToCelcius(fahrenheit) {
    const celcius = (fahrenheit - 32) * 5/9;
    return celcius;
}


// menggunakan readline untuk meminta input suhu dalam fahrenheit dari pengguna

rl.question('masukan suhu dalam Fahrenheit : ', (inputFahrenheit) => {
    // mengonversi input menjadi angka (float) 
    const fahrenheit = parseFloat(inputFahrenheit);

    // memeriksa apakah input menjadi angka (float)
    if (!isNaN(fahrenheit)) {
        // mengubah suhu dari Fahrenheit ke Celcius
        const celcius = fahrenheitToCelcius(fahrenheit);
        
        // menampilkan hasil
        console.log(`${fahrenheit} Fahrenheit sama dengan ${celcius.toFixed(2)} Celcius`)
    
        // Menutup interface readline setelah selesai
        rl.close();
    }

    else {
        // Menampilkan pesan kesalahan jika input tidak valid
        console.log('Mohon masukkan angka yang valid.');
        // Menutup interface readline
        rl.close();
      }
    
});