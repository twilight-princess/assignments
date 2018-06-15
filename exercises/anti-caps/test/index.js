var assert = require('chai').assert


var antiCaps = require('../anti-caps.js')
var testCase = ["", "abc", "ABC", "AbC"]

describe("testing anti-caps", function() {
    it("should return empty string", function() {
        assert.equal(antiCaps(testCase[0]), "")
    })
    it("should return ABC", function() {
        assert.equal(antiCaps(testCase[1]), "ABC")
    })
    it("should return abc", function() {
        assert.equal(antiCaps(testCase[2]), "abc")
    })
    it("should return aBc", function() {
        assert.equal(antiCaps(testCase[3]), "aBc")
    })
})