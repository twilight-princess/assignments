makeNumb = (length) => {
    return Math.floor(Math.random() * length) 
}
shuffleArr = (array) => {
    let newArray = []
    while (newArray.length < array.length) {
        let numb = makeNumb(array.length)
        if (array[numb] !== '') {
            newArray.push(array[numb])
            array[numb] = ''
        } else {
            makeNumb(array.length)
        }
    }
    return newArray
}
console.log(shuffleArr([1, 2, 3, 4, "blah", "idk", "rand"]))