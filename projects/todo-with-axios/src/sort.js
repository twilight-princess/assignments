const numberArr = [5, 9, 10, 7, 8]

const sortedNumbArr = [5, 6, 7, 8, 9,10]

isLowestToHighest = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] < array[i+1]) {
            return true
        } else {
            i = array.length
            return false
        }
    }
}

checkSortedArr = (arr) => {
    let i = 0
    let isSorted = true
    while (i < arr.length && isSorted) {
        if (arr[i] >= arr[i+1]) {
            isSorted = false
        } else {
            i++
        }
    }
    return isSorted
}

console.log(isLowestToHighest(numberArr))
console.log(checkSortedArr(numberArr))