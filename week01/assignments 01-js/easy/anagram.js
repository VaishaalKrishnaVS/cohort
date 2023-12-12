/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length!=str2.length) return false;

    let char_arr1 = [...(str1.toLowerCase())];
    let char_arr2 = [...(str2.toLowerCase())];
    char_arr1.sort();
    char_arr2.sort();

    for(let i=0;i<char_arr1.length;i++){
      if(char_arr1[i]!=char_arr2[i]) return false;
    }

    return true;

}

module.exports = isAnagram;
