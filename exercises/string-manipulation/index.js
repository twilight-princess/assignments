var rs = require('readline-sync')

// var user = function(name, age, color) {
//     name: Darlene,
//     age: 28,
//     favoriteColor: yellow
// }

var fName = rs.question('What is your name? ')
console.log('Nice to meet you, ' + fName)
var age = rs.question('\nHow old are you? ')
console.log('Oh, WOW! I\'ve never met anyone that old! That\'s ' + age.length + ' digits long!')
var color = rs.question('\nWhat is your favorite color? :\) ')
console.log(color.toUpperCase() + ' is my favorite too!')
var lName = rs.question('\nI forgot to ask, what is your last name? ')
var fullName = fName + " " + lName
console.log('Pleased to make your acquaintance, ' + fullName)
var lifeStory = rs.question('\nHey, ' + fName + '. Could you tell me your life story using at least 20 characters? ')
function checkLength() {
    if (lifeStory.length < 20) {
        console.log("\nSorry, your story wasn't quite long enough. I made one up for you. I would ask you again, but you couldn't handle it the first time, and ain't nobody got time for that. Your new story is: ")
        lifeStory = ('Hi! My name is ' + fullName + '. My age is ' + age + '.')
        console.log('\n' + lifeStory)
    }
}
checkLength()
console.log('Yawn. All I heard was \"' + lifeStory.slice((lifeStory.length/2)) + '\".')
var userChoice = rs.question('\nSorry, ' + fName + '. I am just messin with ya! Pick a number between 1 and ' + lifeStory.length + '? ')
console.log(lifeStory.slice(userChoice))