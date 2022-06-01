export default class Car{
    constructor(color, brand, horsepower = 100) {
        this.color = color;
        this.brand = brand;
        this.horsepower = horsepower;
    }

    setEngine(engine){
        this.engine = engine;
    }

    drive(){
        console.log("I am starting to drive")
        this.engine.go();
    }

}
