let aliv = require("./aliv.js")	
let random = require("./random");
module.exports =class Mammoth extends aliv{

    constructor(x, y, index) {
         super(x,y,index)
         this.energy = 20;
         }
         
         getNewCoordinates() {
         this.directions = [
         [this.x - 1, this.y - 1],
         [this.x, this.y - 1],
         [this.x + 1, this.y - 1],
         [this.x - 1, this.y],
         [this.x + 1, this.y],
         [this.x - 1, this.y + 1],
         [this.x, this.y + 1],
         [this.x + 1, this.y + 1]
         ];
         }
         chooseCell(character) {
              this.getNewCoordinates()
              return super.chooseCell(character);
              }
         
         
        move() {
            let emptyCells = this.chooseCell(1)
            let newCell = random(emptyCells)
            
            if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 8
            this.x = newX
            this.y = newY
            }
            else{
                this.mov()
            }
        }
        mov() {
            let emptyCells = this.chooseCell(2)
            let newCell = random(emptyCells)
            
            if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            for (var i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
               grassEaterArr.splice(i, 1);
                break;
                }
                }

            matrix[newY][newX] = 8
            this.x = newX
            this.y = newY
            }
            else{
                this.mo()
            }
        }
        mo(){
            let emptyCells = this.chooseCell(3)
            let newCell = random(emptyCells)
            
            if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
               predatorArr.splice(i, 1);
                break;
                }
                }
            matrix[newY][newX] = 8
            this.x = newX
            this.y = newY
            }
        }
    }