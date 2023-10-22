let aliv = require("./aliv.js")	

module.exports = class Predator extends aliv{

     constructor(x, y, index) {
          super(x,y,index);
     this.energy = 30;
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
     
     eng(a){
     
          let engi = this.chooseCell(7)
          let engis = random(engi)
          if (engis) {
          this.energy--;
          matrix[this.y][this.x] = 0
          let newX = engis[0]
          let newY = engis[1]
          matrix[engis[1]][engis[0]] = 3
          this.x = newX
          this.y = newY
          if (this.energy <= 0) {
               this.die()
               }
     }
      else{
          this.eat(a)
      }

}   
 
     eat(a) {
     let foods = this.chooseCell(2)
     let food = random(foods)
     if (food) {
     this.energy++;
     matrix[this.y][this.x] = 2
     let newX = food[0]
     let newY = food[1]
     matrix[food[1]][food[0]] = 3
     this.x = newX
     this.y = newY
     for (var i in grassEaterArr) {
     if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
    grassEaterArr.splice(i, 1);
     break;
     }
     }
     if (this.energy >= a) {
     this.mul()
     }
     }
     else {
     this.move()
     }
     }
     
     mul() {
          var newCell = random(this.chooseCell(2));
          if (newCell) {
          var eaters = new Predator(newCell[0], newCell[1], this.index);
          predatorArr.push(eaters);
          matrix[newCell[1]][newCell[0]] = 3;
          }
          }
          
          
    
     
     
     move() {
     this.energy--;
     let emptyCells = this.chooseCell(0)
     let newCell = random(emptyCells)
     if (newCell) {
     let newX = newCell[0]
     let newY = newCell[1]
     matrix[this.y][this.x] = 0
     matrix[newY][newX] = 3
     this.x = newX
     this.y = newY
     
     }
     
     if (this.energy <= 0) {
     this.die()
     }
     }
     
     die() {
     matrix[this.y][this.x] = 0;
     for (var i in predatorArr) {
     if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
          predatorArr.splice(i, 1);
     break;
     }
     }
     }
     }