function buttonClickedAdd(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) + parseFloat(num2);

    document.getElementById("result").innerHTML = result;
}
function buttonClickedSub(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) - parseFloat(num2);

    document.getElementById("result").innerHTML = result;
}
function buttonClickedMult(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) * parseFloat(num2);

    document.getElementById("result").innerHTML = result;
}
function buttonClickedDiv(){
    console.log("clicked");
    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseFloat(num1) / parseFloat(num2);

    document.getElementById("result").innerHTML = result;
}
