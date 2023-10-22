let aliv = require("./aliv.js")

module.exports = class Grass extends aliv{
    constructor(x, y, index) {
        super(x,y,index);
       this.multiply = 0;

    }
    
     mul(a) {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        // console.log(newCell, this.multiply);
        if (this.multiply >= a && newCell) {
            //grasseaterov-ameninc
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;  
        }
    }
    
     
    
}
