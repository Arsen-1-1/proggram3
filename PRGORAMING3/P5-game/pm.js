
////

var express = require("express");

var app = express();

var server = require('http').Server(app);

var io = require('socket.io')(server);

app.use(express.static("../client"));

app.get("/", function (req, res) {

res.redirect("index.html");

});

server.listen(3000)


let aliv = require("./aliv.js")
let krak = require("./krak.js")
let buton = require("./buton.js")
let grassEater = require("./grassEater.js")
let parasite = require("./parasite.js")
let predator = require("./predator.js")
let grass = require("./class.js")


/////////////let-ner

//  num1 = 80;
//  num2 = 80;
grassArr = [];
 grassEaterArr = [];
 predatorArr = [];
 caxArr = [];
 krakArr = [];
parasiteArr = [];




///////////////functionnner


/////
// var kar = document.getElementById("kar");
// function clic() {
//     location.reload()
// }
//  matrix = [
// ];
// kar.addEventListener("click", clic);




// //////
// var sv = document.getElementById("sv");
// function mb() {
//     console.log("AA")
//     x = Math.floor(random(0, 80))
//      y = Math.floor(random(0, 80))
//     matrix[x][y] = 2
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 2) {
//                  eater = new GrassEater(x, y, 2)

//                 grassEaterArr.push(eater)
//             }
//         }
//     }
// }
// sv.addEventListener("click", mb);
// //////


// var sx = document.getElementById("sx");
// function nb() {
//      x = Math.floor(random(0, 80))
//      y = Math.floor(random(0, 80))
//     matrix[x][y] = 3
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 3) {
//                  predat = new Predator(x, y, 3)
//                 predatorArr.push(predat)
//             }
//         }
//     }
// }
// sx.addEventListener("click", nb);
// ///////

// var sc = document.getElementById("sc");
// function gb() {
//     if(jm!="winter" ){
//     x = Math.floor(random(0, 80))
//    y = Math.floor(random(0, 80))
//     for (var o = 0; o <= 2; o++) {
//         for (var p = 0; p <= 2; p++) {
//             y++
//             matrix[x][y] = 6
//         }
//         y -= 3
//         x++
//     }
//     for (var y = 0; y < matrix.length; y++) {
//         for (var x = 0; x < matrix[y].length; x++) {
//             if (matrix[y][x] == 6) {
//                 kr = new Krak(x, y, 6)
//                 krakArr.push(kr)
//             }
//         }
//     }
//  }
//  }
//  sc.addEventListener("click", gb);

// /////////

function character(index, count) {
    for (let a = 0; a < count; a++) {
         x = Math.floor(random(0, num1))
         y = Math.floor(random(0, num2))
        if (matrix[x][y] == 0) {
            matrix[x][y] = index
        }
    }
}




///////////function()
function setTime(){
   createMatrix(80, 80)
   character(2, 10)
   character(1, 600)
   character(3, 15)
   character(4, 4)
   character(7, 4)

   for (var y = 0; y < matrix.length; y++) {
      for (var x = 0; x < matrix[y].length; x++) {
          if (matrix[y][x] == 1) {
              gr = new Grass(x, y, 1)
              grassArr.push(gr)
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

      }
  }
}


////////////



jamanak = 0
jm;
jmtrx = ["spring","summer","autumn","winter"]
function draw2(){



   if(jamanak==101){
      jamanak = 0
  }
jamanak++

   for (var i in grassArr) {
       grasssahman = 8
      //
      if(jm==jmtrx[0]){
           grasssahman -=1
      }
      if(jm==jmtrx[3]){
          grasssahman +=2
     }
      
      grassArr[i].mul(grasssahman)
  }
  for (var i in grassEaterArr) {
      uteliq = 17
//
      if(jm==jmtrx[0]){
          uteliq -=1
     }
     if(jm==jmtrx[1]){
      uteliq +=1
     }
     if(jm==jm==jmtrx[3]){
      uteliq +=3
    }
     
      grassEaterArr[i].eats(uteliq)
  }
  for (var i in predatorArr) {
      bazmacumpredator = 13
      //
     if(jm==jm==jmtrx[3]){
      bazmacumpredator +=3
    }
      predatorArr[i].eng(bazmacumpredator)
  }
  for (var i in caxArr) {
       butonmult=25
      //
      if(jm==jmtrx[0]){
          butonmult -=2
     }
     if(jm == jmtrx[2]){
      butonmult +=1
     }
     if(jm==jm==jmtrx[3]){
      butonmult +=5
    }
      caxArr[i].mul(butonmult)
  }
  for (var i in krakArr) {
      
          krakArr[i].eat()
        
     
  }
  for (var i in parasiteArr) {
      //ete wintera parasitner@ korum en(kam chen qaylum), ete winter chi ev nranq xoti tak cen nranq noric haytnvum en
      if(jm!=jm==jmtrx[3]){
          parasiteArr[i].move()
        }
      
  }
  io.emit("update matrix",matrix)
}

io.on("connection", function(socket){
socket.emit("update matrix", matrix)
drow2();
setTime()
})

 let intervalID;
function startplay(){
   clearInterval(intervalID)
   intervalID = setInterval(() => {
      drow2()
   }, 1000);
}






//////////////
