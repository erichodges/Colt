// O(n) best case
// O(n2) average 
// O(n2) worst (this is what we care about)
// Space: O(1)

// works well if data is coming in live and the left side of the array is kept sorted by this algo

//Start by picking the second element in the Array 

// Now compare the second element with the one before it and swap if necessary.

// Continue to the next element and if it is in the incorrect order iterate through the sorted portion (i.e. the left side) to place the element in the correct place

// Repeat until the array is sorted.

function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j]
    }
    arr[j+1] = currentVal;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([2,1,9,76,4]))
  