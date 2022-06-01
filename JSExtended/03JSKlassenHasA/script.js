import Car from "./Car.js";
import Engine from "./Engine.js";

let c1 = new Car("red", "ferrari 1", "720");
let c2 = new Car("blue", "bmw 2", "300");

let e1 = new Engine("123");
let e2 = new Engine("987");

c1.setEngine(e1);

c1.drive();
