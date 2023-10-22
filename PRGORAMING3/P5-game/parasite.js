let aliv = require("./aliv.js")
module.exports = class Parasite extends aliv{
    constructor(x, y, index) {
        super(x,y,index);
        this.energy = 4;
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
            let emptyCells = this.chooseCell(0)
            let newCell = random(emptyCells)
            
            if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 7
            this.x = newX
            this.y = newY
            }
        }
}