export default class Car{
    constructor(color, brand, horsepower = 100) {
        this.color = color;
        this.brand = brand;
        this.horsepower = horsepower;
    }

    printSpecification(){
        console.log(this.color + " - " + this.brand + " - " + this.horsepower);
    }
}

