/* scramble!

Write a function that does these things to a string:
- sort each word (anything with only numbers or letters, separated by spaces)
- reverse chunks (anything between two punctuation marks, a new line or the beginning/end of the string)
- preserve formatting (leave tabs and newlines in place);

*/
const thirdScrambleArg = `a list of drinks:
  - milk
  - sugar free coke
  - soy sauce`;
const thirdScrambleExpected = `diknrs fo ilst a:
  - iklm
  - ceko eefr agrsu
  - acesu osy`;
const scrambleTests = [
  { name: 'first', args: ['the road works.'], expected: 'eht ador korsw.' },
  { name: 'second', args: ["name: 'second'"], expected: "aemn: 'cdenos'" },
  { name: 'third', args: [thirdScrambleArg], expected: thirdScrambleExpected },
  { name: 'fourth', args: ["name: 'second cow'"], expected: "aemn: 'cdenos cow'" },
  { name: 'fifth', args: ["name e eman: 'second cow, cba'"], expected: "aemn e aemn: 'cdenos cow, abc'" },
];    

function scramble(str) {
  /*
    write this function using "chunk", "sortWords" and "reverseChunk"
    each of these functions is one step along the way to a scrambled string
    this is a an exercise to practice using breaking large problems into smaller ones
    and then solving the smaller problems and combining the small solutions into a full solution
  */
  //const chunkArr = chunk(str);
  //const chunkedStr = chunkArr.join(" ");
  //const reversedString = reverseChunk(chunkedStr);
  const reversedString = reverseChunk(str);
  const sortedString = sort(reversedString);
  return sortedString;
}
evaluate(scramble, scrambleTests);
