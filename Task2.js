class Rectangle{
    constructor(length,breadth) {
        this.length=length
        this.breadth=breadth
    }
    calculateArea(){
        return this.length*this.breadth
    }
    calculatePerimeter(){
        return 2*(this.length+this.breadth)
    }
}
const rectangle=new Rectangle(7,5)
console.log("Area of rectangle: "+rectangle.calculateArea())
console.log("Perimeter of rectangle: "+rectangle.calculatePerimeter())