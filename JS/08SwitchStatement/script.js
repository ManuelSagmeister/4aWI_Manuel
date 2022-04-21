//Erstelle zwei Zufallszahlen zwischen 5 und 10

let min = 5;
let max = 10;
let randomInt = Math.round(Math.random() *(max - min) + min);
console.log(randomInt);

switch (randomInt){
    case 10:
        console.log("Ten");
        break;
    case 9:
        console.log("Nine");
        break;
    case 8:
        console.log("Eight");
        break;
    case 7:
        console.log("Seven");
        break;
    case 6:
        console.log("Six");
        break;
    case 5:
        console.log("Five");
        break;
}