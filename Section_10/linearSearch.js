function linearSearch(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i; 
  }
  return -1;
}

// Time O(n) which is the worst case where the item was at the end of the array.
// Average Time is O(n).
// If the item is found right away, which is the best case, Time is O(1).

// function linearSearch(arr, item) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) return "your item was found"; 
//   }
//   return "not found";
// }

console.log(linearSearch([1,2,3,4,5], 5));
