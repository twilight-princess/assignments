var x = document.getElementById("x")
var y = document.getElementById("y")

function calcAdd(x, y){
    return x + y
}
function calcSub(x, y){
    return x - y
}
function calcMultiply(x, y){
    return x * y
}

document.calculator.add.onclick = function(){

    document.getElementById("addition").innerHTML = calcAdd(x.ljk/, y.valueAsNumber)
}
<<<<<<< HEAD
// document.subtract.onclick = calcSub(x, y);
// document.multiply.onclick = calcMultiply(x, y);


// document.getElementById("subtraction").innerHTML = calcSub(x, y);
// document.getElementById("multiplication").innerHTML = calcMultiply(x, y);
=======
document.calculator.subtract.onclick = function(){
    document.getElementById("subtraction").innerHTML = calcSub(x.valueAsNumber, y.valueAsNumber)
}
document.calculator.multiply.onclick = function(){
    document.getElementById("multiplication").innerHTML = calcMultiply(x.valueAsNumber, y.valueAsNumber)
}
>>>>>>> stuff
