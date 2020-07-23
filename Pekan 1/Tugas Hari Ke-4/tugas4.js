// Soal 1

console.log('LOOPING PERTAMA');
var a = 2;
while (a <= 20) {
    console.log(a + ' - I love coding');
    a += 2;
}

console.log('LOOPING KEDUA');
var b = 20;
while (b >= 2) {
    console.log(b + ' - I love coding');
    b -= 2;
}



// Soal 2

for (var m = 1; m <= 20; m ++) {
    if (m % 3 == 0 && m % 2 == 1) {
        console.log(m +'. I Love Coding');
    }
    else if (m % 2 == 0) {
        console.log(m + '. Berkualitas');
    }
    else if (m % 2 == 1) {
        console.log(m +'. Santai');
    }
}



// Soal 3

var e = '';
for (var c=1; c<=7; c++) {
    for (var d = 1; d <= c; d ++) {
        e += '#';
    }
    e += '\n';
}
console.log(e);



// Soal 4

var kalimat = "saya sangat senang belajar javascript";
console.log(kalimat.split(' '));




// Soal 5

var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var dB = daftarBuah.sort();

for (var z = 0; z < daftarBuah.length; z ++) {
        console.log(dB[z]);
}