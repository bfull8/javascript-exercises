const add = function (n1, n2) {
  return n1 + n2;
};

const subtract = function (n1, n2) {
  return n1 - n2;
};

const sum = function (arr) {
  let result = 0;
  for (let i = 0; i < arr.length; ++i) {
    result += arr.at(i);
  }
  return result;
};

const multiply = function (arr) {
  let result = 1;
  for (let i = 0; i < arr.length; ++i) {
    result *= arr.at(i);
  }
  return result;
};

const power = function (base, exp) {
  return base ** exp;
};

const factorial = function (n) {
  let fact = 1;
  for (let i = n; i >= 1; --i) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
