// Soal 1

function halo() {
    return 'Halo Sanbers!'
}
console.log(halo());


// Soal 2

function kalikan(no1,no2) {
    var hasil = no1 * no2
    return hasil
} 
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali)


// Soal 3
function introduce(nama, umur, almt, hobi) {
    return 'Nama saya ' + nama + ', umur saya ' + umur + ' tahun, alamat saya di ' + almt + ', dan saya punya hobby yaitu ' + hobi + '!'
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan)