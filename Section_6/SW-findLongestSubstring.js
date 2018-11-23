// Write a functin called findLongestSubstring, which accepts a string and returns substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6

// Time O(n)

// This one from Colt is not working:

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] + i + 1;
//   }
//   return longest;
// }


// Found this solution at:   https://gist.github.com/codediodeio/24319b9b17cba57e7a34002228abaaaf

// Check out:
// https://js-algorithms.tutorialhorizon.com/2017/01/23/length-of-longest-substring-without-repeating-characters/


function findLongestSubstring(str) {
  let map = {}
  let start = 0;
  let maxLen = 0;
  let arr = str.split('');

  for (i = 0; i < str.length; i++) {
    let current = map[arr[i]];
    if (current != null && start <= current) {
        start = current + 1
    } else {
        maxLen = Math.max(maxLen, i - start + 1)
    }    
    map[arr[i]] = i
}
  return maxLen
}

// findLongestSubstring('') // 0
console.log(findLongestSubstring('rithmschool')) // 7
// console.log(findLongestSubstring('thisisawesome')) // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6