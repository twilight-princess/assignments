function antiCaps(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i].toLowerCase()) {
            newStr += str[i].toUpperCase()
        } else {
            newStr += str[i].toLowerCase()
        }
    }
    return newStr
}

console.log(antiCaps("aDNASDKsdkasdlkSDA"))

module.exports = antiCaps