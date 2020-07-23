/** This function takes a string to be encoded and a shift factor and then returns the encoded string in Caesar cipher system.
 *@param {str} - string to be encoded
 @param {number} - shift factor
 @return {str} - encoded Caesar string
 @example:
 caesar('Hey', 5) // returns 'Mjd;
 */
const caesar = (str, keyShift) => { 
    if (keyShift < 0) {
        return caesar (str, keyShift + 26);
    }
    
    let finishStr = '';

    for (i = 0; i < str.length; i++) {
        let letter = str[i];
        
        if (letter.match(/[a-z]/i)) {
            let codeUnicode = str.charCodeAt(i);

            if (codeUnicode >= 65 && codeUnicode <= 90) {
                letter = String.fromCharCode(((codeUnicode - 65 + keyShift) % 26) + 65);
            } else if (codeUnicode >= 97 && codeUnicode <= 122) {
                letter = String.fromCharCode(((codeUnicode - 97 + keyShift) % 26) + 97);
            }
        };
        finishStr += letter;
    }
    return finishStr;
};

module.exports = caesar;
