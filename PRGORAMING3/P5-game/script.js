

const socket =io();
let txt = document.getElementById('jamanak')
/////////////////////////////////////
function setup() {
    createCanvas(80 * 40, 80 * 40);
    background('#acacac');
}



function drawhful(matrix) {

if(jamanak <= 25){
    document.body.style.background = "linear-gradient(rgb(1, 189, 1),rgb(1, 100, 1))" 
    txt.innerText =jmtrx[0]
    txt.style.color= "rgb(1, 189, 1)" 
    jm =jmtrx[0]
}
else if(jamanak >25 && jamanak<=50){
    document.body.style.background = "linear-gradient(rgb(255, 215, 0,2),rgb(245, 165, 49,2),rgb(245, 165, 76,2))" 
    txt.innerText =jmtrx[1]
    txt.style.color= "rgb(245, 165, 76,2)"
    jm = jmtrx[1]

    if(jamanak == 37 || jamanak==30 || jamanak ==40){
        gb()
    }
}
else if(jamanak >50 && jamanak<=75 ){
    document.body.style.background = "linear-gradient(rgb(220, 80, 5,2),rgb(196, 15, 5,3),rgb(128, 0, 0))" 
    txt.innerText =jmtrx[2]
    txt.style.color= "rgb(128, 0, 0)"
    jm = jmtrx[2]
}
else if(jamanak >75 && jamanak<=100){
     document.body.style.background = "linear-gradient(rgb(248, 248, 255),rgb( 186, 210, 236),rgb(186, 184, 236))"  
     txt.innerText =jmtrx[3]
     txt.style.color= "rgb(186, 184, 236)" 
     jm = jmtrx[3]
    }
    console.log("aa")

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("orange");
            }
            else if (matrix[y][x] == 3) {
                fill("darkred");
            }
            else if (matrix[y][x] == 4) {
                fill("purple");
            }
            else if (matrix[y][x] == 5) {
                fill("pink");
            }
            else if (matrix[y][x] == 6) {
                fill("#D73502");
            }
            else if (matrix[y][x] == 7) {
                fill("black");
            }


            else if (matrix[y][x] == 0) {
                fill("darkgray");
            }



            rect(x * 40, y * 40, 40, 40)
console.log("aa")
         
        }
    }
    
   

}
socket.on("draw matrix", drawhful);









// var sc = document.getElementById("sc");
// function gb() {
//     if(jm!="winter" ){
//     x = Math.floor(random( 80))
//    y = Math.floor(random( 80))
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



// ////
 
// var sx = document.getElementById("sx");
// function nb() {
//      x = Math.floor(random( 80))
//      y = Math.floor(random( 80))
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

// /////

// var sv = document.getElementById("sv");
// function mb() {
//     console.log("AA")
//     x = Math.floor(random( 80))
//      y = Math.floor(random( 80))
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
// // //////