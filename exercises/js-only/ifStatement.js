var person = {  
  name: "Bobby",
  age: 12
}

// Bronze Medal
if (person.age >= 18) {
  console.log(person.name + "is allowed to go to the movie.");
} else {
  console.log(person.name + "is not allowed to go to the movie.");
}

if (person.name[0] === "B") {
  console.log(person.name + "is allowed to go to the movie.");
} else {
  console.log(person.name + "is not allowed to go to the movie.");
}

if ((person.name[0] === "B") && (person.age > 18)) {
  console.log(person.name + "is allowed to go to the movie.");
} else {
  console.log(person.name + "is not allowed to go to the movie.");
}

// Silver Medal
if (1 === "1") {
  console.log("strict");
} else if (1 == "1") {
  console.log("abstract");
} else {
  console.log("not equal at all");
}

if ((1 <= 2) && (2 === 4)) {
  console.log("yes");
}

console.log("OR!!!");

if ((3*4 > 10) || (5 + 10 > 10)) {
  console.log("yes");
}

// Gold Medal
var word = "dog";
var isString;

if (typeof word === "string") {
  isString = true;
} else {
  isString = false;
}
if (isString) {
  console.log("\"dog\" is a string.");
}

if (typeof "true" == "boolean") {
  console.log("\"true\" is a boolean.");
} else {
  console.log("\"true\" is a !boolean.");
}

if (typeof isDefined === "undefined") {
  console.log("Not defined");
}
 
function LetterNumberCompare(x,y) { 
  var aplhaNumber = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
    l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
    u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
  }
  var comparison = ""; 
  var i = 0;
 while (typeof x == "string") {
    var keys = Object.keys(aplhaNumber);
    var values = Object.values(aplhaNumber);
    if (keys[i] == x) {
      x = values[i];
    } else {
      i++;
    }
  }
  if (x > y) { 
    comparison = " greater than "; 
  } else if (x < y) { 
    comparison = " less than "; 
  } else { 
    comparison = " equals "; 
  } console.log(x, comparison, y); 
}
LetterNumberCompare("s", 12)