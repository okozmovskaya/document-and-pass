/**
 * A function that simply repeats the string a given number of times.
 *
 * @param {text}  - string for repeats
 * @param {number} - number of times for repeats string
 * @returns {string} - string which include @param {text} a given @param {number} of times without spaces.
 * 
 * @example
 * repeatString('hey', 3) // returns 'heyheyhey';
 *
 */
const repeatString = (text, number) => {
    
    let string = '';

    if (number < 0) {
        return 'ERROR';
    } else {
        for (i = 0; i < number; i++) { 
            string += text;
        }
    }
        return string;
}

module.exports = repeatString
