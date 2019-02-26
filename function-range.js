function range(start, end, step) {
  var array = [];
  var starty = start;

  step = step || 1;
  if (step > 0) {
    while (starty <= end) {
      array.push(starty);
      starty += step
    }
  } else {
    while (starty >= end) {
      array.push(starty);
      starty += step;
    }
  }
  return array;
  }

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));