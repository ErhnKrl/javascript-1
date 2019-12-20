/* repeat charecters

write a function that repeats the charecters in a string according to these rules:
- letters are doubled
- numbers are tripled
- anything else is quadrupled

*/

const repeatCharsTests = [
  { name: 'first', args: ['abc'], expected: 'aabbcc' },
  { name: 'second', args: ['123'], expected: '111222333' },
  { name: 'third', args: ['%-*>'], expected: '%%%%----****>>>>' },
  { name: 'fourth', args: ['h3LL0 W@r!|)'], expected: 'hh333LLLL000    WW@@@@rr!!!!||||))))' },
  { name: 'fifth', args: ['{:-<*>-:}'], expected: '{{{{::::----<<<<****>>>>----::::}}}}' },
  { name: 'sixth', args: [''], expected: '' },
  { name: 'seventh', args: [' '], expected: '    ' },
];
function repeatChars(str) {
  let myArray = str.split("");
  let repeatTime;
  let charCode;
  let myNewArray = [];
  let myNewString;
  myArray.forEach(element => {
    charCode = Number(element.charCodeAt());
    if (charCode >= 65 && charCode <= 90) {
      repeatTime = 2;
    } else if (charCode >= 97 && charCode <= 122) {
      repeatTime = 2;
    } else if (charCode >= 48 && charCode <= 57) {
      repeatTime = 3;
    } else {
      repeatTime = 4;
    }
  
  for(let i = 0; i<repeatTime; i++){
    myNewArray.push(element);
  };
  myNewString = myNewArray.join("");

  });
  return myNewString;
}
evaluate(repeatChars, repeatCharsTests);



function repeatCharsHandler() {

  // read and process user input (this works, no need to change it!)
  const stringInput = document.getElementById('repeatChars-input').value;

  // pass user input through core logic (this works!  no need to change it)
  const repeatCharsed = repeatChars(stringInput);

  // report result to user (this works, no need to change it!)
  const outputField = document.getElementById('repeatChars-output');
  outputField.innerHTML = repeatCharsed;

  console.log('\n--- repeatCharsHandler ---');
  console.log('stringInput:', typeof stringInput, ',', stringInput);
  console.log('repeatCharsed:', typeof repeatCharsed, ',', repeatCharsed);
};
const repeatCharsButton = document.getElementById('repeatChars-button');
repeatCharsButton.addEventListener('click', repeatCharsHandler);
