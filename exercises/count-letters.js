var letters = {};

function countChar(str) {
    str = str.toLowerCase()
    for (var i = 0; i < str.length; i++) {
        var letter = str[i]
        if (letters[letter]) {
            letters[letter]++
        } else {
            letters[letter] = 1
        }
    console.log(letter + ": " + letters[letter])
    }
}

countChar("Darlene")

