/**
 * A function that returns reversed string.
 *
 * @param {str}  - string for reversed
 * 
 * @example
 * reverseString('hello there') // returns 'ereht olleh'
 *
 */
const reverseString = (str) => {
   
    return str.split("").reverse().join("");

}

module.exports = reverseString
