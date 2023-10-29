let aliv = require("./aliv.js")
let random = require("./random");
module.exports =class Krak extends aliv{

     constructor(x, y, index) {
          super(x,y,index)
          this.energy = 6;
          this.directions = [];
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
          
          
         
          
          eat() {
          let foods = this.chooseCell(1)
          let food = random(foods)
          if (food) {
          this.energy--;
          matrix[this.y][this.x] = 0
          let newX = food[0]
          let newY = food[1]
          matrix[food[1]][food[0]] = 6
          this.x = newX
          this.y = newY
          for (var i in grassArr) {
          if (newX == grassArr[i].x && newY == grassArr[i].y) {
          grassArr.splice(i, 1);
          if (this.energy <= 0) {
               this.die()
               }
          break;
           
          }
          }
          }
          
          else   {
               this.eats()
               }    
          }        

          eats() {
               let foods = this.chooseCell(2)
               let food = random(foods)
               if (food) {
               this.energy;
               matrix[this.y][this.x] = 0
               let newX = food[0]
               let newY = food[1]
               matrix[food[1]][food[0]] = 6
               this.x = newX
               this.y = newY
               for (var i in grassEaterArr) {
               if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
              grassEaterArr.splice(i, 1);
               break;
               }
               }
               if (this.energy >= 0) {
               this.die()
               }
               }
               else   {
                    this.die()
                    }  
             
               }
          
          die() {
          matrix[this.y][this.x] = 0;
          for (var i in krakArr) {
          if (this.x == krakArr[i].x && this.y == krakArr[i].y) {
          krakArr.splice(i, 1);
          break;
          }
          }
          }
     }