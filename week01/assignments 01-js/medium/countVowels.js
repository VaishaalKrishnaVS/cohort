/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let ans = 0;
    let chararr = [...(str.toLowerCase())];
    for(let i =0;i<chararr.length;i++){
      if(/[aeiou]/.test(chararr[i])) ans +=1;
    }
    return ans;
}

module.exports = countVowels;