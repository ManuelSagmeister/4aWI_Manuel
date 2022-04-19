//Erstelle eine Variable banana mit dem Wert "Banane"
//Erstelle eine Variable apple mit dem Wert "Apple"
let banana = "Banane";
let apple = "Apple";

//Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
//Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

//Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
//Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

let appleWeight = 0.34;
let bananaWeight = 0.22;

//Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
let applePerKilo = 1/appleWeight;
let bananaPerKilo = 1/bananaWeight;
console.log(applePerKilo);
console.log(bananaPerKilo);

let pricePerApple = applePerKilo/applePricePerKilo;
let pricePerBanana = bananaPerKilo/bananaPricePerKilo;
console.log(pricePerApple);
console.log(pricePerBanana);

//Preis von 8 Äpfeln
let amount = 8;
console.log(pricePerApple*amount);

//Preis von 17 Bananen
amount = 17
console.log(pricePerBanana*amount);

//Preis von 1 Tonne Äpfel
let weight = 1000;
console.log(applePricePerKilo*weight);

//Preis von 1 Tonne Bananen
console.log(bananaPricePerKilo*weight);