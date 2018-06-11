function calcAdd(x, y) {
    return x + y;
}
function calcSub(x, y) {
    return x - y;
}
function calcMultiply(x, y) {
    return x * y;
}

var x = document.getElementById("x");
var y = document.getElementById("y");

console.log(document.calculator.add)
document.calculator.add.onclick = function(){
    // get the input values from the right input node
    var xValue = x.valueAsNumber || 0;
    var yValue = y.valueAsNumber || 0;

    // add them together
    document.getElementById("addition").innerHTML = calcAdd(xValue, yValue);
    // display the result
}
// document.subtract.onclick = calcSub(x, y);
// document.multiply.onclick = calcMultiply(x, y);


// document.getElementById("subtraction").innerHTML = calcSub(x, y);
// document.getElementById("multiplication").innerHTML = calcMultiply(x, y);