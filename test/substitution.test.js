// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution() by Joshua Juarez",()=>{
    describe("error handling",()=>{
        it("should return false is no alphabet",()=>{
            const actual = substitution("testWord")
            expect(actual).to.be.false;
        })
        it("should return false if alphabet isn't 26 charaters long",()=>{
            const actual = substitution("testWord", "abcdefhhijklmnop")
            expect(actual).to.be.false
        })
        it("should return false if alphabet copies letters/symbol",()=>{
            const actual = substitution("testWord", "abcabcabcabcabcabcabcabcab")
            expect(actual).to.be.false;
        })
    })
    describe("encoding a message",()=>{
        it("should encode message using the new alphabet",()=>{
            const alphabet = "qwertyuiopasdfghjklzxcvbnm"
            const expected = "exkkn"
            const actual = substitution("curry", alphabet);
            expect(actual).to.equal(expected);
        })
        it("should work with symbols in alphabet",()=>{
            const alphabaet = "qwertyuiopasdfghj$lzxcvbnm"
            const expected = "ex$$n";
            const actual = substitution("curry", alphabaet);
            expect(actual).to.equal(expected);
        })
        it("keep spaces",()=>{
            const alphabaet = "qwertyuiopasdfghj$lzxcvbnm"
            const expected = "ex$$n ol zit wtlz liggzt$";
            const actual = substitution("curry is the best shooter", alphabaet);
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding a message",()=>{
        it("should decode a message by using the given alphabet",()=>{
            const alphabet = "qwertyuiopasdfghjklzxcvbnm";
            const expected = "curry";
            const actual = substitution("exkkn", alphabet,false);
            expect(actual).to.equal(expected)
        })
        it("should work with any kind of key with unique characters",()=>{
            const alphabet = "qwertyuiopasdfghj$lzxcvbnm";
            const expected = "curry";
            const actual = substitution("ex$$n", alphabet,false);
            expect(actual).to.equal(expected)
        })
        it("should preserve spaces",()=>{
            const alphabet = "qwertyuiopasdfghj$lzxcvbnm";
            const expected = "curry is the best shooter";
            const actual = substitution("ex$$n ol zit wtlz liggzt$", alphabet,false);
            expect(actual).to.equal(expected)
        })
    })
})