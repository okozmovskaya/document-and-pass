/**
 *
 */
const repeatString = (arr, ... args) => {
    for (i = 0, i < arr, i++) {
        for (a = 0, a < args, a++) {
            if (i === a) {
                arr.splice(i, 1)
            }
        }
    }

}

module.exports = repeatString
