const reverseString = function(value) {
  let length = value.length - 1;
  let res = "";
  while (length >= 0) {
    res += value[length];
    length--;
  }
  return res;
};

// Do not edit below this line
module.exports = reverseString;
