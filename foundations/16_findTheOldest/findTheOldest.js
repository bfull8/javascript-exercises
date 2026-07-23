/*const findTheOldest = function (arr) {
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
};*/

function getAge(person) {
  let birth = person.yearOfBirth;
  let death =
    person.yearOfDeath === undefined
      ? new Date().getFullYear()
      : person.yearOfDeath;
  let age = death - birth;
  return age;
}

const findTheOldest = function (arr) {
  return arr.reduce((oldest, person) => {
    return getAge(person) > getAge(oldest) ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
