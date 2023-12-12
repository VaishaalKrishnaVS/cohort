/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let chararr = [...(str.toLowerCase())];
  let i=0;
  let j=chararr.length-1;
  while(i<=j){
    while(/[^a-z]/.test(chararr[i]))i++;
    while(/[^a-z]/.test(chararr[j]))j--;
    if(chararr[i++]!=chararr[j--]) return false;
  }
  return true;
}

module.exports = isPalindrome;
