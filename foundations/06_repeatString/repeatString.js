const repeatString = function (txt, num) {
  let result = "";
  if (num < 0) {
    return "ERROR";
  }
  for (let i = 1; i <= num; ++i) result += txt;
  return result;
};

// Do not edit below this line
module.exports = repeatString;
