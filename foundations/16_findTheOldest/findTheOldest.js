const findTheOldest = function (arr) {
  let oldest = 0;
  let result = null;
  for (const person of arr) {
    let birth = person.yearOfBirth;
    let death =
      person.yearOfDeath === undefined
        ? new Date().getFullYear()
        : person.yearOfDeath;
    let age = death - birth;

    if (age > oldest) {
      oldest = age;
      result = person;
    }
  }
  return result;
};

findTheOldest([
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]);
// Do not edit below this line
module.exports = findTheOldest;
