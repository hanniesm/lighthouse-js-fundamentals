function merge(array1,array2) {
  return array1.concat(array2).sort();
}

console.log(merge([ 1, 2, 3], [ 4, 5, 6 ]));
console.log(merge([0, 3, 1], [9, 7, 2]));
console.log(merge([], [9, 7, 2]));
console.log(merge([1, 2, 3], []));