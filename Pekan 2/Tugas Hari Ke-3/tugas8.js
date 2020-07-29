// Soal 1
console.log('------Soal 1------')
const luasLingkaran = radius => {
    return radius * radius * 3.14
}
console.log(luasLingkaran(5))

let kelilingLingkaran = radius => {
    return radius * 6.28
}
console.log(kelilingLingkaran(5))
console.log()


// Soal 2
console.log('------Soal 2------')
let kalimat = ''
const kata1 = 'saya'
const kata2 = 'adalah'
const kata3 = 'seorang'
const kata4 = 'frontend'
const kata5 = 'developer'

const kalimatBaru =  (v, w, x, y, z) => {
    return `${v} ${w} ${x} ${y} ${z}`
}
kalimat = kalimatBaru(kata1, kata2, kata3, kata4, kata5)
console.log(kalimat)
console.log()




// Soal 3
console.log('------Soal 3------')
class Book {
    constructor (nama, halaman, harga) {
        this.name = nama
        this.totalPage = halaman
        this.price = harga
    }
}

class Komik extends Book {
    constructor(nama, halaman, harga, colorful) {
      super(nama, halaman, harga);
      this.isColorful = colorful;
    }
}

const komikCoba = new Komik ('Inuyasa', 150, 75000, true)
console.log(komikCoba)