const dp = {
  0: 0,
  1: 1,
};
const fibonacci = function(num) {
  // console.log(`current number: ${num}\nfibonacci: ${dp[num]}`);
  if( num < 0){
    return "OOPS";
  }

  if(num in dp && num >= 0){
    return dp[num];
  }

  return dp[num] = fibonacci(num - 2) + fibonacci(num - 1);
};


// Do not edit below this line
module.exports = fibonacci;
