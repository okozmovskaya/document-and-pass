/** This function determines whether or not a given string is a palindrome.
 *@param {str} - given string for palindrome
 @return {boolean} - true if the string is palindrome and false on the contrary
 
 @example 

palindromes('racecar') // true
palindromes('tacos') // false

 */

const palindromes = (str) => {
    let justCharacter = /[\W_]/g;
    let lowerCaseStr = str.toLowerCase().replace(justCharacter, '');
    let reverseStr = lowerCaseStr.split('').reverse().join(''); 

    if (lowerCaseStr === reverseStr) {
        return true;

    } else {
        return false;
    }
};

module.exports = palindromes;
