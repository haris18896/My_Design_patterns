class Square {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    area() {
        return this.height * this.width;
    }
}

let mySquare = new Square(10, 20);

console.log(mySquare.area())