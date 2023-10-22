function clic(){
    location.reload()  
    }

let matrix = [
 ] ;
    
 let num1 = 80;
let num2 = 80;

function createMatrix(num1, num2) {
for( let i = 0 ; i < num1; i++){
matrix.push([])
for(let j = 0; j< num2 ; j++) {
matrix[i].push(0)
}
createCanvas(matrix[0].length * side, matrix.length * side,);
}
}

function mb(){
    var x = Math.floor(random(0, num1))
   var y = Math.floor(random(0, num2))
   matrix[x][y] = 2
   for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
   if(matrix[y][x] == 2){
    var eater = new GrassEater(x , y , 2)
    
    grassEaterArr.push(eater)
   }
    }
}
}
function nb(){
    var x = Math.floor(random(0, num1))
    var y = Math.floor(random(0, num2))
    matrix[x][y] = 3
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 3){
                var predat = new Predator(x , y , 3)
                predatorArr.push(predat)
        }
    }
}
}
function gb(){
    var x = Math.floor(random(0, num1))
    var y = Math.floor(random(0, num2))
    for (var o = 0; o <= 2; o++) {
        for (var p = 0; p <= 2; p++) {
            y++
    matrix[x][y]=6
    }
    y-=3
    x++
}
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
    if(matrix[y][x] == 6){
        var kr = new Krak(x , y , 6)
        krakArr.push(kr)
    }
}
    }
}


function character(index, count) {
for (let a = 0; a < count; a++) {
var x = Math.floor(random(0, num1))
var y = Math.floor(random(0, num2))
if( matrix[x][y] == 0){
matrix[x][y] = index
}
}
}

    
    var side = 40;
    var grassArr = [];
    var grassEaterArr = [];
    var predatorArr = [];
    var caxArr = [];
    var krakArr=[];
    var parasiteArr=[];
    function setup() {
   createMatrix(80,80)
     character(2,10)
        character(1,600)
        character(3,15)
       let a = prompt("caxikneri qanak, cankali e(1-7)")
       character(4,a)
       let b = a
        character(7,b)
    for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
    if (matrix[y][x] == 1) {
    var gr = new Grass(x, y, 1)
    grassArr.push(gr)
    } else if(matrix[y][x] == 2){
    var eater = new GrassEater(x , y , 2)
    grassEaterArr.push(eater)
    }
    else if(matrix[y][x] == 3){
        var predat = new Predator(x , y , 3)
        predatorArr.push(predat)
    }
    else if(matrix[y][x] == 4){
        var cax = new Caxik(x , y , 4)
        caxArr.push(cax)
    }
    else if(matrix[y][x] == 6){
        var kr = new Krak(x , y , 6)
        krakArr.push(kr)
    }
    else if(matrix[y][x] == 7){
        var par = new Parasite(x , y , 7)
        parasiteArr.push(par)
    }
    
    }
    }
    
    frameRate(10);
    
    background('#acacac');
    }
    
    
    
    
    function draw() {
     
    
        
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

   
    
    rect(x * side, y * side, side, side)
    
    /*fill("blue")
    text(x + " " + y, x * side + side / 2, y * side + side / 2)
    */
    }
    }
    
    for(var i in grassArr){
     grassArr[i].mul()
    }
    for(var i in grassEaterArr){
    grassEaterArr[i].eats()
    }
    for(var i in predatorArr){
        predatorArr[i].eng()
        }
        for(var i in caxArr){
            caxArr[i].mul()
            }
            for(var i in krakArr){
                krakArr[i].eat()
                }
                for(var i in parasiteArr){
                    parasiteArr[i].move()
                    }
    }