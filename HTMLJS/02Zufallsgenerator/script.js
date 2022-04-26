function generieren(numLow, numHigh){

    num1 = document.getElementById("numLow").value;
    num2 = document.getElementById("numHigh").value;

    let int1 = parseInt(num1);
    let int2 = parseInt(num2);

    let number = Math.round(Math.random() * (int2 - int1) + int1);

    document.getElementById("Zahl").innerHTML = number;
}