const array = ["this", "is", "an", "array"]

longestTrio = arr => {
    let sum = 0
    let longest = []
    for (let i = 0; i < arr.length - 2; i++) {
        let compare = arr[i].length + arr[i+1].length + arr[i+2].length
        if (compare > sum) {
            sum = compare
            longest = [arr[i], arr[i+1], arr[i+2]]
        }
    }
    console.log(longest)
}

longestTrio(array)