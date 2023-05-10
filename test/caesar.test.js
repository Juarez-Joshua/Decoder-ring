const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js")

describe("caesar() by Joshua Juarez", () =>{
    describe("shift limits", ()=>{
        it("Should return false when shift is 0",()=>{
            const expected = false;
            const actual = caesar("testing",0);
            expect(actual).to.equal(expected);
        })
        it("Should return false when shift is over 25",()=>{
            const expected = false;
            const actual = caesar("testing",30);
            expect(actual).to.equal(expected);
        })
        it("Should return false when shift is under -25",()=>{
            const expected = false;
            const actual = caesar("testing",-30);
            expect(actual).to.equal(expected);
        })
    })//end shift limit its
    describe("encoding words",()=>{
        it("Should encode when given a shift",()=>{
            const expected = "wklqnixo";
            const actual = caesar("thinkful", 3);
            expect(actual).to.equal(expected);
        })
        it("should encode with symbols", ()=>{
            const expected = "g@$l qsric"
            const actual = caesar("c@$h money", 4)
            expect(actual).to.equal(expected);
        })
        it("should ignore caps",()=>{
            const expected = "oguucig";
            const actual = caesar("MESSAGE", 2);
            expect(actual).to.equal(expected);
        })
        it("should handle wrapping around alphabet",()=>{
            const expected = "sbckir"
            const actual = caesar("oxygen",4);
            expect(actual).to.equal(expected)
        })
        it("should, allow for negative shifts",()=>{
            const expected = "ynawpkn";
            const actual = caesar("creator", -4);
            expect(expected).to.equal(actual);
        })
    })//end encoding its
    describe("decoding words",()=>{
        it("should decode a message by reversing the shift",()=>{
            const expected = "thinkful";
            const actual = caesar("wklqnixo", 3,false);
            expect(actual).to.equal(expected);
        })
        it("should leave spaces and other symbols",()=>{
            const expected = "c@$h money"
            const actual = caesar("g@$l qsric", 4,false)
            expect(actual).to.equal(expected);
        })
        it("should ignore caps",()=>{
            const expected = "message";
            const actual = caesar("OGUUCIG", 2,false);
            expect(actual).to.equal(expected);
        })
        it("should handle wrapping around",()=>{
            const expected = "oxygen"
            const actual = caesar("sbckir",4,false);
            expect(actual).to.equal(expected)
        })
        it("should allow for negative shifts",()=>{
            const expected = "creator";
            const actual = caesar("ynawpkn", -4,false);
            expect(expected).to.equal(actual);
        })
    })
})//end caesar describe
