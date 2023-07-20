function all(arr, callback) {
  return arr.every(callback);
}

// Sample usage:
var allAreLessThanSeven = all([1, 2, 9], function(num) {
  return num < 7;
});

console.log(allAreLessThanSeven); // Output: false