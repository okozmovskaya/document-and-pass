/** This function takes an array of objects representing people with a birth and death year and returns the oldest person from array.
 *@param {object} - object for person with items name, year of birth and year of death;
 @return {object.item} - name
 @example
    const people = [
      {
        name: 'Carly',
        yearOfBirth: 1066,
      },
      {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
      },
      {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
      },
    ] // return Carly;

 */
let findTheOldest = function (people) {

    let oldestPeople = people.sort (function(a,b) {
        let lastPerson = a.yearOfDeath == undefined ? new Date().getFullYear() - a.yearOfBirth : a.yearOfDeath - a.yearOfBirth;
        let nextPerson = b.yearOfDeath == undefined ? new Date().getFullYear() - b.yearOfBirth : b.yearOfDeath - b.yearOfBirth;
        if (lastPerson > nextPerson) {
            return -1;
        } else {
            return 1;
        }
    });
    return people[0];
}


module.exports = findTheOldest;
