/** There is the function Fibonacci which have one parameter number - index number of Fibonacci series. The function returns also number under the given index.
 *@param {number} - index number of Fibonacci series
  @returns {number} - number under index of Fibonacci series

  @example
    fibonacci(4) // returns the 4th member of the series: 3  (1, 1, 2, 3)
  */

const fibonacci = (n) => {
        let arr = [0, 1];
        if (n < 0) {
            return arr = "OOPS";
        } else {
            for (let i = 2; i < n + 1; i++){
                arr.push(arr[i - 2] + arr[i -1])
              }
        }  

       return arr[n];
      
}

module.exports = fibonacci
