const caesarModule = (function () {

  //function to make input lowercase and split into an array of each letter
  function splitAndLowerCase(input=""){
    const inputLower = input.toLowerCase();
    const arrayOfLowerCase = inputLower.split("");
    return arrayOfLowerCase;
  }
  function cipher(input = "", shift = 0) {
    const arrayOfLowerCase = splitAndLowerCase(input);
    //map the array of lowerCase letters into a new array that has the shifted version of each letter
    const arrayOfCodedLetters = arrayOfLowerCase.map((char) => {
      const charToBeChanged = char.charCodeAt(0);
      //ensure that the char being handled is a lowercase letter, otherwise return 
      if (charToBeChanged < 97 || charToBeChanged > 122) return char;
      //check for positive shift
      if (shift > 0) {
        //if a wrap around, see how much it needs to go past 
        if (charToBeChanged + shift > 122) {
          //calculate how much past z the shift wants to go
          const numPastZ = charToBeChanged + shift - 122;
          //apply that shift to 96 because a's index is 97
          const newLetter = 96 + numPastZ;
          //return the letter based on ascii code
          return String.fromCharCode(newLetter);
        } else {//apply shift to ascii code and return 
          const higherNum = charToBeChanged + shift;
          return String.fromCharCode(higherNum);
        }
      } else {//if a wrap around, check how much under z it needs to go, math is reverse version of going over
              //see how much under a the shift wants to go and then apply it to z
        if (charToBeChanged + shift < 97) {
          const numUnderZ = 96 - (charToBeChanged + shift);
          const newLetter = 122 - numUnderZ;
          return String.fromCharCode(newLetter);
        } else {
          const lowerNum = charToBeChanged + shift;
          return String.fromCharCode(lowerNum);
        }
      }
    }); //end map
    return arrayOfCodedLetters.join("");
  } //end cipher function

  function caesar(input, shift, encode = true) {
    //if statement to check valid shift valid
    if (shift === 0 || shift < -25 || shift > 25) return false;
    //check to see if i need to cipher or decipher
    if(encode){
      return cipher(input,shift)
    }else{
      //multiply shift by -1 to reverse effects of cipher
      return cipher(input,shift*-1)
    }
  } //end caesar function

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
