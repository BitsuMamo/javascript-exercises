const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  return array.reduce((total, number) => {
    return total += number;
  }, 0)

};

const multiply = function(array) {
  return array.reduce((total, number) => {
    return total *= number;
  }, 1)
};

const power = function(base, power) {
  let ans = 1;
  while(power !== 0){
    ans *= base;
    power --;
  }
  return ans;
};

const factorial = function(number) {
  let ans = 1;
  while(number > 0){
    ans *= number;

    number--;
  }

  return ans;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
