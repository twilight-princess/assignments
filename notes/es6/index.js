//ES5
var example = function() {

}

function example2() {

}

//ES6
const noParams = () => {

}

const oneParam = param => {

}

const multiParams = (x, y, z) => {

}
//returns a single expression/value
  //doesnt use return keyword
  //doesnt need a body
const returnOneExpression = (x, y) => x+y

const returnSingleObject = () => ({foo: "bar"})


const printInfo = (fName = "Jane", lName = "Doe", age = 100) => {
  console.log(`Hi, my name is ${fName} ${lName}. I am ${age} years old!`)
}
printInfo(/*"Darlene", "Welch", 28*/);

// ES5
function products(a, b, c, d, e) {
  var numbers = [a, b, c , d, e];
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}
// ES6
const product = (...numbers/*args*/) => numbers.reduce((cc, number) => acc * number, 1);
