class Krak{

     constructor(x, y, index) {
          this.x = x;
          this.y = y;
          this.energy = 6;
          this.index = index;
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
               var found = [];
               this.getNewCoordinates()
               for (var i in this.directions) {
               var x = this.directions[i][0];
               var y = this.directions[i][1];
               if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
               if (matrix[y][x] == character) {
               found.push(this.directions[i]);
               }
               }
               
               }
               return found;
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