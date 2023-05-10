const expect = require("chai").expect;
const{polybius} = require("../src/polybius");

describe("polybius() by Joshua Juarez",()=>{
    describe("ciphering messages",()=>{
        it("should encode messages by creating pair of numbers for a letter",()=>{
            const expected =  "4432423352125413";
            const actual = polybius("thinkful");
            expect(actual).to.equal(expected);
        })
        it("Should translate both i and j to 42",()=>{
            const expected = "4242232143"
            const actual = polybius("jimbo")
            expect(actual).to.equal(expected);
        })
        it("should ignore spaces",()=>{
            const expected = "3154242445 4234 443251 21513444";
            const actual = polybius("curry is the best");
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding messages",()=>{
        it("should decode messages",()=>{
            const expected =  "th(i/j)nkful";
            const actual = polybius("4432423352125413",false);
            expect(actual).to.equal(expected);
        })
        it("should translate 42 into i/j",()=>{
            const expected = "(i/j)(i/j)mbo"
            const actual = polybius("4242232143",false);
            expect(actual).to.equal(expected);
        })
        it("should retain spaces",()=>{
            const expected = "curry (i/j)s the best";
            const actual = polybius("3154242445 4234 443251 21513444",false);
            expect(actual).to.equal(expected);
        })
        it("return false if num count is odd",()=>{
            const actual = polybius("121131345",false);
            expect(actual).to.equal(false);
        })
    })
})