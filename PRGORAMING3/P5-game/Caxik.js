let aliv = require("./aliv.js")
module.exports = class Caxik extends aliv{

    constructor(x, y, index) {
        super(x,y,index);
        this.multiply = 20;       
        this.enrg=0
        }

         mul(a) {
            this.multiply++;
            var newCell = random(this.chooseCell(0));
            if (this.multiply >= a && newCell) {
       
                var newcaxik = new Caxik(newCell[0], newCell[1], this.index);
                caxArr.push(newcaxik);
                matrix[newCell[1]][newCell[0]] = 5;
                this.multiply = 0;  
                this.enrg++
            }
        }
        

}