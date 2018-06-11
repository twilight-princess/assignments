const box = document.getElementById("box");

function turnBlue() {
    box.style.backgroundColor = "blue";
}
function turnWhite() {
    box.style.backgroundColor = "white";
}
function turnRed() {
    box.style.backgroundColor = "red";
}
function turnYellow() {
    box.style.backgroundColor = "yellow";
}
function turnGreen() {
    box.style.backgroundColor = "green";
}
function turnOrange() {
    box.style.backgroundColor = "orange";
}

box.onmouseover = turnBlue;
box.onmouseleave = turnWhite;
box.onmousedown = turnRed;
box.onmouseup = turnYellow;
box.ondblclick = turnGreen;
box.onwheel = turnOrange;