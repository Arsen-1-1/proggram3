let aliv = require("./aliv.js")	
module.exports = class GrassEater extends aliv{
    
    constructor(x, y, index) {
        super(x,y,index);
    this.energy = 14;
    }
    getNewCoordinates() {
    this.directions = [
    [this.x - 1, this.y - 1],
    [this.x,  this.y - 1],
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
    
    mul() {
    var newCell = random(this.chooseCell(1));
    if (newCell) {
    var eater = new GrassEater(newCell[0], newCell[1], this.index);
    grassEaterArr.push(eater);
    matrix[newCell[1]][newCell[0]] = 2;
    }
    } 
    
    eat(a) {
    let foods = this.chooseCell(1)
    let food = random(foods)
    if (food) {
    this.energy++;
    matrix[this.y][this.x] = 0
    let newX = food[0]
    let newY = food[1]
    matrix[food[1]][food[0]] = 2
    this.x = newX
    this.y = newY
    for (var i in grassArr) {
    if (newX == grassArr[i].x && newY == grassArr[i].y) {
    grassArr.splice(i, 1);
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
    eats(a) {
        let foods = this.chooseCell(5)
        let food = random(foods)
        if (food) {
        this.energy+=3;
        matrix[this.y][this.x] = 0
        let newX = food[0]
        let newY = food[1]
        matrix[food[1]][food[0]] = 2
        this.x = newX
        this.y = newY
        for (var i in caxArr) {
        if (newX == caxArr[i].x && newY == caxArr[i].y) {
            caxArr.splice(i, 1);
        break;
        }
        }
        if (this.energy >= 16) {
        this.mul()
        }
        }
        else {
        this.eat(a)
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
    matrix[newY][newX] = 2
    this.x = newX
    this.y = newY
    }
    
    if (this.energy <= 0) {
    this.die()
    }
    }
    
    die() {
    matrix[this.y][this.x] = 0;
    for (var i in grassEaterArr) {
    if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
    grassEaterArr.splice(i, 1);
    break;
    }
    }
    }
    }