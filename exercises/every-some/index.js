let array = ['Darlene', 5, 'Malcolm', 'Layla']
const callback = (el) => {
    return(typeof el === 'string')
}

Array.prototype.every = function(callback) {
    for (let i in arr) {
        if (!callback(i)) {
            return false
        }
    }
    return true    
}

console.log(every(array, callback))