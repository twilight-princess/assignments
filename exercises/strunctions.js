function firstAndLast(firstName, lastName) {
    return firstName.concat(" " + lastName);
}
console.log(firstAndLast("Darlene", "Welch"));

function indexOfALetter(word) {
    return word.indexOf('a');
}
console.log(indexOfALetter("Darlene"));

function findCopy(word) {
    return word.match("le");
}
console.log(findCopy("Darlene"));