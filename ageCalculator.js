function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old."
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

function ageCalculator(name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old."
}

console.log(ageCalculator2("Amanda", 1983, 2015));
console.log(ageCalculator2("Donald", 1988, 2015));


