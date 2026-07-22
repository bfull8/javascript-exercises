const palindromes = function (str) {
  let l = 0;
  let r = str.length - 1;
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  while (l <= r) {
    let left = str.at(l).toLowerCase();
    let right = str.at(r).toLowerCase();
    if (!alphanumerical.includes(left)) {
      ++l;
      continue;
    }

    if (!alphanumerical.includes(right)) {
      --r;
      continue;
    }

    if (left != right) {
      return false;
    }
    ++l;
    --r;
  }
  return true;
};

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
