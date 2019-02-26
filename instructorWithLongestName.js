const instructorWithLongestName = function(instructors) {
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(element) {
    console.log(element);
  })
};

console.log(instructorWithLongestName(
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
));
console.log(instructorWithLongestName(
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
));