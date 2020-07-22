/**
 * The function `sumAll` have two parameters (numbers) that are the start and the end of array. The function returns the sum all numbers in array. 
 * @param {number} - start of array
 * @param {number} - end of array
 * @returns {number} - sum all numbers in array
 */
const sumAll = (start, end) => {
    let sum = 0;

    if (start <= 0 || end <= 0 || typeof end !== 'number' || typeof start !== 'number') {
        return sum = 'ERROR';
    } else {
        let firstTerm = start > end ? end : start;
        let lastTerm = end < start ? start : end;
    
        for (let i = firstTerm; i <= lastTerm; i++) {
            sum += i;
        }
    }
    return sum;

}

module.exports = sumAll
