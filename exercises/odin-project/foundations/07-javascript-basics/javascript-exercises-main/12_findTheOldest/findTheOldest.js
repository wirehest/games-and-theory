const findTheOldest = function (people) {
  return people.reduce((eldest, current) => {
    return getAge(current) > getAge(eldest) ? current : eldest;
  });

  function getAge(person) {
    let currentYear = new Date().getFullYear();
    return (person.yearOfDeath || currentYear) - person.yearOfBirth;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
