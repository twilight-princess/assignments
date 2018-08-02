const gameOfThree = (n, counter = 0) => {
    // Base Case
    if (n === 1) return counter
    // Recursion
    // determine if divisible by 3
    if (n % 3 === 0) {
        return gameofThree(n/3, counter+1)
    } else {
        if ((n+1) % 3 === 0) {
            return gameOfThree((n+1)/3, counter+1)
        } else {
            return gameOfThree((n-1)/3, counter+1)
        }
    }
}

console.log(gameOfThree(2))