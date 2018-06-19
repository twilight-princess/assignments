var word = "";

function sum(x,y) {
    return x + y;
}

//console.log(sum(3, 4));

function highestNumb(x, y, z) {
    if (x > y) {
        if (x > z) {
            return x;
        } else {
            return z;
        }
    } else if (y > z) {
        return y;
    } else {
        return z;
    }
}

//console.log(highestNumb(2910, 34238948, 90));

function oddOrEven(x) {
    if (x % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}

//console.log(oddOrEven(67));

function concatenate(word) {
    if (word.length <= 20) {
        return word + word;
    }
}

//console.log(concatenate("randomWord"));


function nFibonacci(n) {
    var fibonacciArray = [0, 1];
    for (var i = 0; i < n; i++) {
    var nextNumb = fibonacciArray[i] + fibonacciArray[i+1];
    fibonacciArray.push(nextNumb); 
    }
    return fibonacciArray;
}

//console.log(nFibonacci(45));

function quadraticEq(a, b, c) {
    var x1 = ((-1*b)-(Math.sqrt(Math.pow(b, 2)-4*a*c)))/(2*a);
    var x2 = ((-1*b)+(Math.sqrt(Math.pow(b, 2)-4*a*c)))/(2*a);
    return ("(" + x1 + ", " + x2 + ")");
}

console.log(quadraticEq(100, 3, 5));

function wordMode(word) {
    word.toLowerCase();
    var mode = "";
    var counter = 0;
    for (var i = 0; word.length - 1; i++) {
        for (var j = 1; word.length - 1; j++) {
            if ((word[i] == word[j]) && (word[i] !== word[j])) {
                counter ++;
                j++;
            } else {
                j++;
            }
            i++;
        }
    }
    console.log(counter);
    return mode;
}

//console.log(wordMode("darlizzleforshizzle"));