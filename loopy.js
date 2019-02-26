for (let counter = 100; counter <= 200; counter++) {
  if (counter % 3 === 0 && counter % 4 === 0) {
    console.log("LoopyLighthouse")
  } else if (counter % 3 === 0) {
    console.log("Loopy");
  } else if (counter % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(counter);
}
}

const loopyLighthouse = function(range, multiples, words) {
  for (let counter = range[0]; counter <= range[1]; counter++) {
    if (counter % multiples[0] === 0 && counter % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (counter % multiples[0] === 0) {
      console.log(words[0]);
    } else if (counter % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(counter);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([100, 200], [3, 4], ["Argh", "Banana"]);
