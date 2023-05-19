class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Rombo {
  constructor(diagonalMax, diagonaMin){
    this.diagonaMin = diagonaMin
    this. diagonalMax = diagonalMax
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
static calculate(figure){
  if(figure instanceof Circle){
    return figure.radius* figure.radius * Math.PI
  }
  else if(figure instanceof Rectangle){
    return figure.width*figure.height
  }
  else if(figure instanceof Square){
    return figure.side*figure.side
  }
   return "invalid"
}
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);
const rombo = new Rombo(9,7)

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
console.log(AreaCalculator.calculate(rombo));