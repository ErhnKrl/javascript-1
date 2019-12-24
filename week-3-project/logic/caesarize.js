/* Caesar Cipher

  this is a simple encoding algorithm that replaces letters in a message with a new letter

  the new letter is determined by shifting N spaces across the alphabet

  for example, caesarize("A", 3) will return : "D"
  because "D" is three letters past "A".

  (yes, this is the same function you wrote last week)
*/

const caesarizeTests = [
  { name: 'first', args: ["aBcD", 3], expected: 'dEfG' },
  { name: 'second', args: ["aBcD", -3], expected: 'xYzA' },
  { name: 'third', args: ["heLLo worLd!", 0], expected: 'heLLo worLd!' },
  { name: 'fourth', args: ["heLLo worLd!", 1], expected: 'ifMMp xpsMe!' },
  { name: 'fifth', args: ["", 5], expected: '' },
  { name: 'sixth', args: ["mnOpQr", 26], expected: 'mnOpQr' },
  { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^L*(#' },
];
function caesarize(str, shiftNum) {
  let caesarText = '';
  let tmpArr = str.split('');
  let caesarArr = tmpArr.map(function(element) {
    let nmr = element.charCodeAt(0);
    if (65 <= nmr && nmr <= 90) {
      shiftNum >= 0
        ? (nmr = 65 + ((nmr - 65 + shiftNum) % 26))
        : (nmr = 90 - (Math.abs(90 - nmr - shiftNum) % 26));
      caesarText = caesarText + String.fromCharCode(nmr);
    } else if (97 <= nmr && nmr <= 122) {
      shiftNum >= 0
        ? (nmr = 97 + ((nmr - 97 + shiftNum) % 26))
        : (nmr = 122 - (Math.abs(122 - nmr - shiftNum) % 26));
      caesarText = caesarText + String.fromCharCode(nmr);
    } else {
      caesarText = caesarText + element;
    }
  });
  return caesarText;
}
evaluate(caesarize, caesarizeTests);
