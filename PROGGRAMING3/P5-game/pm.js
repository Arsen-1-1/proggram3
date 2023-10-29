const express = require("express");
const app = express();
const fs = require('fs');
const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.use(express.static("."));
app.get("/", function (req, res) {
  res.sendFile("index.html");
});


// function nbServ() {
//   a++

// }

// app.get('/sx', function (req, res) {
//       try {
//         nbServ()
//       } catch (erorr) {
//       }
//   })




server.listen(3000);

var Grass = require('./class.js')
var GrassEater = require('./grassEater.js')
var Predator = require('./predator')
let aliv = require('./aliv.js')
let Krak = require("./krak.js")
let Caxik = require("./Caxik.js")
let Parasite = require("./Parasite.js")
let Mammoth = require("./mammoth")
let random = require("./random");
const { json } = require("express");

grassArr = [];
grassEaterArr = [];
predatorArr = [];
caxArr = [];
krakArr = [];
parasiteArr = [];
MammothArr = [];


sideX = 80;
sideY = 80;

matrix = []



//////hasvark
hasvark = []
grassQanak = 0;
grassEaterQanak = 0;
predatorQanak = 0;
caxQanak = 0;
parasiteQanak = 0;
/////////
bolorkrakner = 0;
////

function createMatrix() {

  for (let i = 0; i < sideX; i++) {
    matrix.push([])
    for (let j = 0; j < sideY; j++) {
      matrix[i].push(0)
    }
  }

  function character(char, qantity) {
    for (let i = 0; i < qantity; i++) {
      var x = random(sideX);
      var y = random(sideY)
      matrix[x][y] = char;

    }
  }


  character(2, 10)
  character(1, 1000)
  character(3, 14)
  character(4, 4)
  character(7, 4)
  character(8, 10)

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        gr = new Grass(x, y, 1)
        grassArr.push(gr)
        grassQanak++;
        hasvark[0] = grassQanak;
      } else if (matrix[y][x] == 2) {
        eater = new GrassEater(x, y, 2)
        grassEaterArr.push(eater)
      }
      else if (matrix[y][x] == 3) {
        predat = new Predator(x, y, 3)
        predatorArr.push(predat)
      }
      else if (matrix[y][x] == 4) {
        cax = new Caxik(x, y, 4)
        caxArr.push(cax)
      }
      else if (matrix[y][x] == 6) {
        kr = new Krak(x, y, 6)
        krakArr.push(kr)
      }
      else if (matrix[y][x] == 7) {
        par = new Parasite(x, y, 7)
        parasiteArr.push(par)
      }
      else if (matrix[y][x] == 8) {
        mammo = new Mammoth(x, y, 7)

        MammothArr.push(mammo)
      }

    }
  }
}

createMatrix()

jama = 0
jmtrx = ["spring", "summer", "autumn", "winter"]
jmS = 0

function changeSeason(season) {
  
  jmS = jmtrx.indexOf(season);
}

function playGame() {
  hasvark[0] = grassArr.length;
  hasvark[1] = grassEaterArr.length;
  hasvark[2] = predatorArr.length;
  hasvark[3] = caxArr.length;
  hasvark[4] = bolorkrakner;
  hasvark[5] = parasiteArr.length;
  if (jama == 25) {
    console.log(hasvark + "///// sax en mnacel   ///" + hasvark[0] + "grass  //" + hasvark[1] + "grasseater  //" + hasvark[2] + "predator  //" + hasvark[3] + "caxik  //" + hasvark[5] + "parasite  //")
  }

  /////
  // if (jm != "undefined") {
  //   jmS = jm
  // }
  if (jama == 40) {
    s = 1
  }
  io.emit('tari', jama)
  if (jama == 101) {
    jama = 0
  }
  //////////


  for (var i in grassArr) {
    grasssahman = 8
    //
    if (jmS == "spring") {
      grasssahman -= 1
    }
    if (jmS == "winter") {
      grasssahman += 2
    }

    grassArr[i].mul(grasssahman)
  }
  for (var i in grassEaterArr) {
    uteliq = 17
    //
    if (jmS == "spring") {
      uteliq -= 1
    }
    if (jmS == "summer") {
      uteliq += 1
    }
    if (jmS == "winter") {
      uteliq += 3
    }

    grassEaterArr[i].eats(uteliq)
  }
  for (var i in predatorArr) {
    bazmacumpredator = 13
    //
    if (jmS == "winter") {
      bazmacumpredator += 3
    }
    predatorArr[i].eng(bazmacumpredator)
  }
  for (var i in caxArr) {
    butonmult = 25
    //
    if (jmS == "spring") {
      butonmult -= 2
    }
    if (jmS == "autumn") {
      butonmult += 1
    }
    if (jmS == "winter") {
      butonmult += 5
    }
    caxArr[i].mul(butonmult)
  }
  for (var i in krakArr) {

    krakArr[i].eat()
  }
  for (var i in parasiteArr) {
    //ete wintera parasitner@ korum en(kam chen qaylum), ete winter chi ev nranq xoti tak cen nranq noric haytnvum en
    if (jmS != "winter") {
      parasiteArr[i].move()
    }

  }
  for (var i in MammothArr) {

    MammothArr[i].move()

  }
  
  io.emit('draw matrix', matrix)


}





function oui() {
  x = Math.floor(random(80))
  y = Math.floor(random(80))

  if(matrix[y][x] === 0 ||matrix[y][x] === 1 ) {
    matrix[y][x] = 3
    predatorArr.push(new Predator(x, y, 3))
  } else {
    oui();
  }
    
}

function toui() {
  x = Math.floor(random(80))
  y = Math.floor(random(80))

  if(matrix[y][x] === 0 ||matrix[y][x] === 1 ) {
    matrix[y][x] = 2

    grassEaterArr.push(new GrassEater(x, y, 2))
  }
  
}

function itoui() {
  x = Math.floor(random(80))
  y = Math.floor(random(80))
  if(matrix[y][x] === 0 ||matrix[y][x] === 1 ) {
  matrix[y][x] = 6
  krakArr.push(new Krak(x, y, 6))
  bolorkrakner = krakArr.length
  }
}



let intervalID;
// function startplay(){
//    clearInterval(intervalID)
//    intervalID = setInterval(() => {
//     playGame()
//    }, 1000);
// }


setInterval(() => {

  playGame()
  jama++;
}, 700)
io.on('connection', (socket) => {


  socket.on("clik", oui)
  socket.on("click", toui)
  socket.on("clicks", itoui)
  socket.on("jam", changeSeason)

  socket.emit('draw matrix', matrix)
  socket.emit('hasvark', hasvark)
})



//////////exanak





