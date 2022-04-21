//wenn größer als 800
//wenn zwischen 500 und 800
//wenn zwischen 200 und 500
//wenn zwischen 0 und 200

let random = Math.random() * 1000;
let randomInt = Math.round(random);

console.log(randomInt);

if (randomInt > 800) {
    console.log("Bigger than 800")
} else if (randomInt > 500 && randomInt < 800) {
    console.log("Bigger than 500, but smaller than 800")
} else if (randomInt > 200 && randomInt < 500) {
    console.log("Bigger than 200, but smaller than 500")
} else {
    console.log("Smaller than 200")
}