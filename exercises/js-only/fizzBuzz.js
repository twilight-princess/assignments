function fizzBuzz() {
    var arr = []
    for (let i = 0; i < 101; i++) {
        arr.push(i)
    }
    var newArray = arr
    for (let i in arr) {
        if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
            newArray[i] = "fizzbuzz"
        } else if (arr[i] % 5 === 0) {
            newArray[i] = "buzz"
        } else if (arr[i] % 3 === 0) {
            newArray[i] = "fizz"
        } else {
            newArray[i] = arr[i]
        }
    }

    return newArray;
}

console.log(fizzBuzz())