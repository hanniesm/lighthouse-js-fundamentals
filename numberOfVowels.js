let numberOfVowels = function(data) {
  var j = 0
  for (let letter = 0; letter < data.length; letter++) {
    if (data[letter] == "a" || data[letter] == "e" || data[letter] == "i" || data[letter] == "o" || data[letter] == "u") {
    j ++;
    }
  } return j;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
