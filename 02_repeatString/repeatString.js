const repeatString = function(value, times) {
  let result = "";
  while(times != 0){
    result += value;
    times--;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
