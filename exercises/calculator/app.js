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
document.calculator.subtract.onclick = function(){
    document.getElementById("subtraction").innerHTML = calcSub(x.valueAsNumber, y.valueAsNumber)
}
document.calculator.multiply.onclick = function(){
    document.getElementById("multiplication").innerHTML = calcMultiply(x.valueAsNumber, y.valueAsNumber)
}