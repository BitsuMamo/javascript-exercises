const palindromes = function (input) {
  input = input.replace(/\s+/g, '');
  input = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
  input = input.toUpperCase();

  let reversed = input.split("").reverse().join("");

  return reversed === input;

};

// Do not edit below this line
module.exports = palindromes;
