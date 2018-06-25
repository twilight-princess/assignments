var assert = require("chai").assert

const marchWords = require("../index.js")

const testCase = "Banh mi pull skateboard ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B lever lever listicle irony pop-up sriracha on the saliva. Shabby on chic eu iceland far next level far lever pull drinking the right vinegar fanny pack pull minim right chicharrones migas."

const expected = ["pull", "lever", "on", "the", "far", "right"]

desribe("testing matching words", () => {
        it("should return an array containing duplicates", () => {
           assert.deepEqual(matchWords(testCase), expected)
        })
})
