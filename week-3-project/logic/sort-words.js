/* sort characters

  sort the characters in a word, words are substrings separated by spaces

*/

const sortTests = [
  { name: 'first', args: ['4321 cde'], expected: '1234 cde' },
  { name: 'second', args: ['abcd 153'], expected: 'abcd 135' },
  { name: 'third', args: ['howdy doody time'], expected: 'dhowy ddooy eimt' },
];
function sort(str) {
  // write me!
  let newArr = str.split(" ");
  function sort(str) {
    let arrstr = str.split("");
    let sortedstr = arrstr.sort();

    if (typeof sortedstr[0] === "integer") {
      sortedstr.sort(function(a, b) {
        return a - b;
      });
    }

    return sortedstr.join("");
  }
  const sortedString = newArr.map(sort);
  return sortedString.join(" ");
}
evaluate(sort, sortTests);
