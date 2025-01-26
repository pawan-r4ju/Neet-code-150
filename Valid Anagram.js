/*Valid Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.*/

function isAnagram(s, t) {
    if (s.length !== t.length) return false;
  
    let count = {};
  
    for (let char of s) {
      count[char] = (count[char] || 0) + 1;
    }
  
    for (let char of t) {
      if (!count[char]) {
        return false;
      } else {
        count[char]--;
      }
    }
  
    return true;
  }
let s = "racecar";
let t = "carrace";
console.log(isAnagram(s, t));
