function isPalindrome(str){
    str = str.toLowerCase()
    var i = 0
    var beg = str[i]
    var isPal = true
    var end = str[str.length - 1 - i]
    while (i < str.length/2){
        console.log(beg)
        console.log(end)
        if (beg == /[^a-z]/){
            beg = str[i+1]
        } else if (end == /[^a-z]/){
            end = str[str.length - 2 - i] 
        }
        if (beg == end) {
            i++
        } else {
            isPal = false
        }
    }
    return isPal
}

//console.log(isPalindrome("Star Rats!"))  // true  
console.log(isPalindrome("palindrome"))  // false  
//console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"))  // true  


// much shorter answer 
// function palindromeFinder(str){
//     var rmChar = str.toLowerCase().replace(/[^a-z]/g, "")
//     for(var i = 0; i < rmChar.length/2; i++){
//         if(rmChar[i] !== rmChar[rmChar.length - 1]){
//         return false
//         }
//     }
//     return true
// }