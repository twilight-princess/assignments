var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];
function printLyrics() {
    var song = lyrics.join(" ");
    return song;
}
function printReverse() {
    var reversed = lyrics.reverse();
    return reversed.join(" ");   
}
function printEveryOther() {
    var everyOther = lyrics.filter((element, index) => {
        return index % 2 === 0;
    });
    return everyOther.join(" ");
}

console.log("\n" + printLyrics(lyrics));

console.log("\n" + printReverse(lyrics));

console.log("\n" + printEveryOther(lyrics));