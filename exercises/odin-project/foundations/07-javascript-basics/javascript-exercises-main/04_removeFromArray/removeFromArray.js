const removeFromArray = function (array, ...rest) {
  return array.filter((x) => !rest.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
