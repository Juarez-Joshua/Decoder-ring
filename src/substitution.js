const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const BASE_APLHABET = ["a","b","c","d","e","f"
  ,"g","h","i","j","k","l","m","n","o","p"
  ,"q","r","s","t","u","v","w","x","y","z"];

  function hasUniqueValues(cipherBet=[]){
    //will go through every index of cipherbet, uses array.indexOf(value) to find the first instance of that value
    //if it gets a different index will return false because it means duplicate values in array
  return cipherBet.every((value, index, array) => {
    return array.indexOf(value) === index;
  });
  }

  function cipher(input="", cipherBet=[]){
    //split the input into an array for each letetr
    const arrayOfLetters = input.split('');
    //map the array of letters to return new letter.
    const codeWord = arrayOfLetters.map((letter)=>{
      //if a space return the space
      if(letter.charCodeAt(0) === 32 ) return letter;
      //variable to hold index of letter in base alphabaet
      let alphaIndex = 0;
      //find the index in base alphabet ansd set alpha index to it;
      BASE_APLHABET.find((char,index)=> {
        //when char in base alphabet is equal to letter in array of letters set alphaindex to index
        if(char === letter) alphaIndex = index;
      });
      //for the mapping, return the cipherbet equivalent index
      return cipherBet[alphaIndex];
    })
    return codeWord.join("");
  }
  //cite notes for cipher, difference being that when mapping, find the index in cipher bet 
  //and return base_alphabet at index
  function decipher(input="",cipherBet=[]){
    const arrayOfLetters = input.split('');
    const codeWord = arrayOfLetters.map((letter)=>{
      if(letter.charCodeAt(0) === 32 ) return letter;
      let alphaIndex = 0;
      cipherBet.find((char,index)=> {
        if(char === letter) alphaIndex = index;
      });
      return BASE_APLHABET[alphaIndex];
    })
    return codeWord.join("");
  }

  function substitution(input='', alphabet="test", encode = true) {
    const cipherBet = alphabet.split('');//splitting given alphabet into a cipherbet array;
    //ensure that cipherbet is valid for using
    if(!hasUniqueValues(cipherBet)|| cipherBet.length != 26){
      return false;
    }else if(encode){
      return cipher(input, cipherBet);
    }else{
      return decipher(input, cipherBet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
