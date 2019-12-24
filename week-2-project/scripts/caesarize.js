/* Caesar Cipher

  this is a simple encoding algorithm that replaces letters in a message with a new letter

  the new letter is determined by shifting N spaces across the alphabet

  for example, caesarize("A", 3) will return : "D"
  because "D" is three letters past "A".
*/

const caesarizeTests = [
  { name: 'first', args: ["aBcD", 3], expected: 'dEfG' },
  { name: 'second', args: ["aBcD", -3], expected: 'xYzA' },
  { name: 'third', args: ["heLLo worLd!", 0], expected: 'heLLo worLd!' },
  { name: 'fourth', args: ["heLLo worLd!", 1], expected: 'ifMMp xpsMe!' },
  { name: 'fifth', args: ["", 5], expected: '' },
  { name: 'sixth', args: ["mnOpQr", 26], expected: 'mnOpQr' },
  { name: 'seventh', args: ["#@&&^F*(#", 7], expected: '#@&&^M*(#' },
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


function caesarizeHandler() {

  // read and process user input (this works, no need to change it!)
  const strToCaesarize = document.getElementById('caesarize-string-input').value;

  const rawNumInput = document.getElementById('caesarize-number-input').value;
  const shiftNumber = Number(rawNumInput);
  if (isNaN(shiftNumber)) {
    throw new TypeError('second input to "caesarize it" must be a number');
  }


  // pass user input through core logic (this works!  no need to change it)
  const caesarized = caesarize(strToCaesarize, shiftNumber);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('caesarize-output');
  outputField.innerHTML = caesarized;

  console.log('\n--- caesarizeHandler ---');
  console.log('strToCaesarize:', typeof strToCaesarize, ',', strToCaesarize);
  console.log('shiftNumber:', typeof shiftNumber, ',', shiftNumber);
  console.log('caesarized:', typeof caesarized, ',', caesarized);
};
const caesarizeButton = document.getElementById('caesarize-button');
caesarizeButton.addEventListener('click', caesarizeHandler);
