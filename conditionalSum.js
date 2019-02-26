const conditionalSum = function(values, condition) {
const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (values === undefined || values.length === 0) {
    return 0;
  } else {
    if (condition === "odd") {
      var odds = values.filter(function(value) {
        return value % 2 === 1;
      })
      return odds.reduce(reducer);
    } else if (condition === "even") {
      var evens = values.filter(function(value) {
        return value % 2 === 0;
      })
      return evens.reduce(reducer);
    } else {
      return "Don't know what to do with this";
    }
  }
}



console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
