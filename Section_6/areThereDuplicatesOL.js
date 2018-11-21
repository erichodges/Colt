// Frequency Counter / (Multiple Pointers?)

// implement a function called, areThereDuplicates which accepts a variable number of arguments, and checs whether there are any duplicates amoung the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers patter. 

// areThereDuplicates(1,2,3) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true


function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates(1,2,3)) // false
// areThereDuplicates(1,2,2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true