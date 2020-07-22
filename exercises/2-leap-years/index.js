/** This function check a given year whether or not a leap year.
 * @param {number} - year for checking,
 * @return {boolean} - true if a year is a leap year and false on the contrary
 *
 * @example
 *  leapYears(2000) // is a leap year: returns true
    leapYears(1985) // is not a leap year: returns false
 * 
 */
const leapYears = function (year) {
    if (year % 4 !== 0) {
        return false;
    } else if (year % 400 !== 0 && year % 100 === 0) {
        return false;
    } else {
        return true;
    }
}

module.exports = leapYears
