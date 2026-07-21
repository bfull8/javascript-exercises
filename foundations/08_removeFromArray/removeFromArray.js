const removeFromArray = function (arr, ...args) {
  let finalArray = [];

  arr.forEach((element) => {
    if (!args.includes(element)) {
      finalArray.push(element);
    }
  });

  return finalArray;
};

// Do not edit below this line
module.exports = removeFromArray;
