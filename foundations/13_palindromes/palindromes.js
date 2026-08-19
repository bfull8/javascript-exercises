/*const palindromes = function (str) {
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
*/

function palindromes(str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

  let cleanedString = str.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).join('');
  let reversedString = cleanedString.split('').reverse().join('');

  return cleanedString == reversedString;
  console.log(reversedString);
  console.log(cleanedString);
}

palindromes("A car, a man, a maraca.");

// Do not edit below this line
module.exports = palindromes;
