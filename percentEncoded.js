const urlEncode = function(text) {
  text = text.replace(/\s/g, "%20")
  return text;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));



const urlEncode = function(text) {
  var stringy = text
  for (var i = 0; i <= stringy.length; i++ ) {
    if (stringy.charAt(i) == " ") {
      console.log("%20");
    } else { console.log(stringy.charAt(i));
  }
}
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));