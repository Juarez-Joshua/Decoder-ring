const polybiusModule = (function () {

  const decodingKey = {
    1: { 1: "a", 2: "f", 3: "l", 4: "q", 5: "v" },
    2: { 1: "b", 2: "g", 3: "m", 4: "r", 5: "w" },
    3: { 1: "c", 2: "h", 3: "n", 4: "s", 5: "x" },
    4: { 1: "d", 2: "(i/j)", 3: "o", 4: "t", 5: "y" },
    5: { 1: "e", 2: "k", 3: "p", 4: "u", 5: "z" },
  };
  function splitAndLower(input = "") {
    const lowerCase = input.toLowerCase();
    return lowerCase.split("");
  } //end splitAndLower
  function encodeFirstNumber(char = "") {
    //switch to check what number should be returned
    switch (char) {
      case "a":case "f":case "l":case "q":case "v":
        return 1;
      case "b":case "g":case "m":case "r":case "w":
        return 2;
      case "c":case "h":case "n":case "s":case "x":
        return 3;
      case "d":case "i":case "j":case "o":case "t":case "y":
        return 4;
      case "e":case "k":case "p":case "u":case "z":
        return 5;
      default:
        return 0;
    }
  }//end endcode first num
  function encodeSecondNumber(char = "") {
    //switch to check what number should be returned
    switch (char) {
      case "a":case "b":case "c":case "d":case "e":
        return 1;
      case "f":case "g":case "h":case "i":case "j":case "k":
        return 2;
      case "l":case "m":case "n":case "o":case "p":
        return 3;
      case "q":case "r":case "s":case "t":case "u":
        return 4;
      case "v":case "w":case "x":case "y":case "z":
        return 5;
    }
  }//end encode second num
  function cipher(input = "") {
    const splitUpLetters = splitAndLower(input);
    const lettersAsNums = splitUpLetters.map((char) => {
      //variable to hold char value in ascii code
      const charToBeChanged = char.charCodeAt(0);
      //check that char is a lowercase letter otherwise return it. returns spaces as well to maintain them 
      if (charToBeChanged < 97 || charToBeChanged > 122) return char;
      //get first num of letter to encode
      let firstNum = encodeFirstNumber(char);
      //get second num of letter to encode
      let secondNum = encodeSecondNumber(char);
      //return the numbers as a string
      return `${firstNum}${secondNum}`;
    }); //end map
    return lettersAsNums.join("");
  } //end cipher function

  function decode(input = "") {
    //split numbers by spaces
    const numbersSplitBySpaces = input.split(" ");
    //array of words incase of spaces
    const arrayOfWords = [];
    //for each word that needs to be made
    numbersSplitBySpaces.forEach((stringOfNumbers) => {
      //word to be built
      let word = "";
      //for loop that iterates by 2 because each pair of nums are a letter
      for (let i = 0; i < stringOfNumbers.length; i += 2) {
        //get the letter by using the numbers are keys in the object
        word += decodingKey[stringOfNumbers[i]][stringOfNumbers[i + 1]];
      }
      //push the word once its finished
      arrayOfWords.push(word);
    });
    //join the words by spaces if there are several
    return arrayOfWords.join(" ");
  }

  function polybius(input = "", encode = true) {
    //get input wo spaces
    const inputWithoutSpaces = input.replace(/ /g, ''); 
    //check if encoding
    if (encode) {
      //return cipher of input
      return cipher(input);
      //check if code that was given is valid for decoding, if invalid return false
    } else if(inputWithoutSpaces.length % 2 === 1){
      return false;
    }else{
      //else return the word
      return decode(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
