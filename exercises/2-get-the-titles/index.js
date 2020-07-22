/** There is function `getTheTitles` which returns required item from object into array.
 * @param {array} - array with objects
 * @param {object} - object into array with several items
 * @returns array with required items from all objects into array
 * @example
 * 
 * const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

    getTheTitles(books) // ['Book','Book2']
 */
const getTheTitles = (books) => {
    let showTitle = books.map(item => item.title);
    return showTitle;

}

module.exports = getTheTitles;
