

const socket = io();
/////////////////////////////////////
function setup() {
    createCanvas(80 * 40, 80 * 40);
    background('#acacac');
}


var newHashvark = []

function drawhful(matrix) {

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
            else if (matrix[y][x] == 8) {
                fill("");
            }

            else if (matrix[y][x] == 0) {
                fill("darkgray");
            }



            rect(x * 40, y * 40, 40, 40)

        }
    }



    let one = document.getElementById('sv');
    let two = document.getElementById('sx');
    let three = document.getElementById('sc');

    function to() {
        socket.emit("click")
    }

    one.addEventListener("click", to)
    function oun() {
        socket.emit("clik")
    }
    two.addEventListener("click", oun)

    function un() {
        socket.emit("clicks")
    }

    three.addEventListener("click", un)
}

function aa(jama) {
    if(jama == 25){
    console.log(newHashvark + "///// sax en mnacel   ///" + newHashvark[0] + "grass  //" + newHashvark[1] + "grasseater  //" + newHashvark[2] + "predator  //" + newHashvark[3] + "caxik  //" + newHashvark[5] + "parasite  //")
    }


    
    if (jama <= 25) {
        document.body.style.background = "linear-gradient(rgb(1, 189, 1),rgb(1, 100, 1))"
        jamanak.innerText = "spring"
        jamanak.style.color = "rgb(1, 189, 1)"
        jm = "spring"
    }
    else if (jama > 25 && jama <= 50) {
        document.body.style.background = "linear-gradient(rgb(255, 215, 0,2),rgb(245, 165, 49,2),rgb(245, 165, 76,2))"
        jamanak.innerText = "summer"
        jamanak.style.color = "rgb(245, 165, 76,2)"
        jm = "summer"


    }
    else if (jama > 50 && jama <= 75) {
        document.body.style.background = "linear-gradient(rgb(220, 80, 5,2),rgb(196, 15, 5,3),rgb(128, 0, 0))"
        jamanak.innerText = "autumn"
        jamanak.style.color = "rgb(128, 0, 0)"
        jm = "autumn"
    }
    else if (jama > 75 && jama <= 100) {
        document.body.style.background = "linear-gradient(rgb(248, 248, 255),rgb( 186, 210, 236),rgb(186, 184, 236))"
        jamanak.innerText = "winter"
        jamanak.style.color = "rgb(186, 184, 236)"
        jm = "winter"
    }

    if (jama % 15 == 0) {
        socket.emit("jam", jm)
    }

}
socket.on("hasvark", (hashvark)=>{
    newHashvark  = hashvark
})
socket.on("draw matrix", drawhful);
socket.on('tari', aa)