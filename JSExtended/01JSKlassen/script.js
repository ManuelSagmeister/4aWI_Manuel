class Car{
    horsepower = 70;
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }

    printSpecification(){
        console.log(this.color + " - " + this.brand + " - " + this.horsepower);
    }
}

let c1 = new Car("red", "Audi");
let c2 = new Car("blue", "BMW");
c1.printSpecification();
c2.printSpecification();