const fibonacci = function (num) {
  let fib = [1, 1];
  let n = num;

  if (!Number.isInteger(num)) {
    n = Number.parseInt(num);
  }
  if (n == 0) {
    return 0;
  }
  if (n < 0) {
    return "OOPS";
  }

  for (let i = 2; i < n; ++i) {
    let j = fib.at(i - 1);
    let k = fib.at(i - 2);
    fib.push(j + k);
  }

  return fib.pop();
};

// Do not edit below this line
module.exports = fibonacci;
