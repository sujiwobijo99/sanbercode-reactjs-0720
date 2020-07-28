// Soal 1
var objectDaftarPeserta = {
    nama : "Asep",
    jenisKelamin : "laki-laki",
    hobi : "baca buku",
    tahunLahir : 1992
}



// Soal 2
var objectDaftarBuah = [{nama : "strawberry", warna : "merah", "ada bijinya" : "tidak", harga : 9000},
                        {nama : "jeruk", warna : "oranye", "ada bijinya" : "ada", harga : 8000},
                        {nama : "Semangka", warna : "Hijau & Merah", "ada bijinya" : "ada", harga : 10000},
                        {nama : "Pisang", warna : "Kuning", "ada bijinya" : "tidak", harga : 5000}]

var arrayDaftarBuah = objectDaftarBuah.filter(function(item){
    return item.nama === "strawberry";
   })
                 
console.log(arrayDaftarBuah)



// Soal 3
var dataFilm = [];
var objectFilm1 = {
    nama : "ewwo",
    durasi : 100,
    genre : "komedi",
    tahun : 2020
}
function tambahFilm () {
    dataFilm.push(objectFilm1)
    return dataFilm;
}
tambahFilm();
console.log(dataFilm)



// Soal 4
class Animal {
    constructor(name) {
        this.name = name;
        this.band = 4;
        this. cold_blooded = false;
    }
}

            // Realeas 0
class Animal {
    constructor(name) {
        this.name = name;
        this.legs = 4;
        this.cold_blooded = false;
    }
}
var sheep = new Animal("shaun");
console.log(sheep.name)
console.log(sheep.legs)
console.log(sheep.cold_blooded)

            //Release 1
class Frog {
    constructor(name) {
        this.legs = 2;
    }
    jump() {
        return console.log('hop hop');
    }
}

class Ape {
    constructor(name) {
        this.legs = 2;
    }
    yell() {
        return console.log('Auooo');
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()
 
var kodok = new Frog("buduk")
kodok.jump()

// Soal 5
class Clock {
    constructor({ template }) {
       var timer;
        function render() {
          var date = new Date();
      
          var hours = date.getHours();
          if (hours < 10) hours = '0' + hours;
      
          var mins = date.getMinutes();
          if (mins < 10) mins = '0' + mins;
      
          var secs = date.getSeconds();
          if (secs < 10) secs = '0' + secs;
      
          var output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
      
          console.log(output);
        }
      
        this.stop = function() {
          clearInterval(timer);
        };
      
        this.start = function() {
          render();
          timer = setInterval(render, 1000);
        };
      }
    }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();
  