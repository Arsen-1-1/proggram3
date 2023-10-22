
/////
// var kar = document.getElementById("kar");
// function clic() {
//     location.reload()
// }
//  matrix = [
// ];
// kar.addEventListener("click", clic);




// //////



// ///////

// /////////






///////////function()


////////////

// io.on("connection", function(socket){
// socket.emit("update matrix", matrix)
// drow2();
// setTime()
// })

//////////////































const express = require("express");
const app = express();
const fs = require('fs');
const server = require("http").createServer(app);
const io = require("socket.io")(server);
app.use(express.static("."));

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

server.listen(3000);

var Grass = require('./class.js')
var GrassEater = require('./grassEater.js')
var Predator = require('./predator')
let aliv = require('./aliv.js')
let Krak = require("./krak.js")
let Caxik = require("./Caxik.js")
let Parasite = require("./Parasite.js")
let random = require("./random");

grassArr = [];
 grassEaterArr = [];
 predatorArr = [];
 caxArr = [];
 krakArr = [];
parasiteArr = [];



sideX = 80;
sideY = 80;

grassArr = []
grassEaterArr = []
bombArr = []
predatorArr = []
matrix = []


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

createMatrix()




jamanak = 0
jm=0;
jmtrx = ["spring","summer","autumn","winter"]

function playGame() {



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


  io.emit('draw matrix', matrix)


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
  }, 500)
io.on('connection', (socket) => {
  socket.emit('draw matrix', matrix)
  socket.on('Total statistics', (data) => {
    fs.writeFileSync('data.json', JSON.stringify(data))
    socket.emit('display statistics', data)
  })

})



//////////exanak





