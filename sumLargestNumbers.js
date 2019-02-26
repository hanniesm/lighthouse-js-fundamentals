let sumLargestNumbers = function(data) {
  arr = data.sort(function(a,b){return b-a});
  return arr[0] + arr[1];
}

console.log(sumLargestNumbers([40, 100, 1, 5, 25, 10]));