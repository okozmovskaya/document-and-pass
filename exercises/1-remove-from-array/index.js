/**
 * A function that takes an array and some other arguments then removes the other arguments from that array.
 *
 * @param {arr}  - array who returns with remove item(s)
 * @param {args} - arguments for remove from array
 * @returns {arr}
 * 
 * @example
 * removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
 *
 */
const removeFromArray = (arr, ...args) => {
    
    for (let a = 0; a < args.length; a++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === args[a]) {
                arr.splice(i, 1);
            }
        }
    }

    return arr;
};

module.exports = removeFromArray
