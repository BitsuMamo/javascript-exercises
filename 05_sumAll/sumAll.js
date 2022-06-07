const sumAll = function(start, end) {
  if(typeof(start) != 'number' || typeof(end) != 'number'){
    return "ERROR";
  }

  if(start < 0 || end < 0){
    return "ERROR";
  }

  if(start > end){
    let temp = start;
    start = end;
    end = temp;
  }

  let res = 0;

  while(start <= end){
    res += end;
    end--;
  }

  return res;
};

// Do not edit below this line
module.exports = sumAll;
