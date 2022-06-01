import Car from "./Car.js";
import Engine from "./Engine.js";
import superCar from "./superCar.js";


let c1 = new Car("red", "ferrari 1", "720");
let sc2 = new superCar("sc1");

let e1 = new Engine("123");
let e2 = new Engine("987");

c1.setEngine(e1);
c1.drive();
sc2.setEngine(e1);
sc2.drive();
sc2.saySomethingSuperDuper();

