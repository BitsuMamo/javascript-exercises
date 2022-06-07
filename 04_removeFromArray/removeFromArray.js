const remove = function(array, value) {
  const res = [];
  array.forEach(element => {
    if (element !== value) {
      res.push(element);
    }
  });
  return res;
}

const removeFromArray = function(array) {
  for (let i = 1; i < arguments.length; i++) {
    array = remove(array, arguments[i]);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
