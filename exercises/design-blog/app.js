let cheerio = require("cheerio")
let jsonframe = require("jsonframe-cheerio")

let $ = cheerio.load("https://www.newyorker.com/popular")
jsonframe($)



let frame = {
  "blogosts":[{
    "content": {
      _s: ".Card__content___10ZW7 Card__hasPhoto___2TFok",
      _d: [{
        "title":,
        "story":
      }]
    }
  }]
}
// for (var i = 0; document.getElementsByClassName("post").length -1; i++){

// }

let result = $('body').scrape(frame, {string: true})
console.log(result)