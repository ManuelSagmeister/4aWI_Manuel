//Erstelle zwei Zufallszahlen zwischen 0 und 100

let randomInt1 = Math.round(Math.random() *100);
let randomInt2 = Math.round(Math.random() *100);

//Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
//dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

//Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
//dann gib aus "Eine der beiden ist kleiner als 30"

//Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
//dann gib aus "Erste Zahl klein, zweite kein 50iger

if (randomInt1 < randomInt2 && randomInt1 < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
} else if (randomInt1 < 30 || randomInt2 < 30){
    console.log("Eine der beiden ist kleiner als 30");
} else if (randomInt1 < 50 && randomInt2 !== 50){
    console.log("Erste Zahl klein, zweite kein 50iger");
}


console.log(randomInt1);
console.log(randomInt2);