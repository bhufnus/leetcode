/**
    Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.
    Return the number of different transformations among all words we have.
 */
var uniqueMorseRepresentations = function (words) {
  // Define a set and variable morse (set to empty string);
  let morseSet = new Set();
  let morse = "";

  // Define object literal
  function decypher(elem) {
    var code = {
      a: ".-",
      b: "-...",
      c: "-.-.",
      d: "-..",
      e: ".",
      f: "..-.",
      g: "--.",
      h: "....",
      i: "..",
      j: ".---",
      k: "-.-",
      l: ".-..",
      m: "--",
      n: "-.",
      o: "---",
      p: ".--.",
      q: "--.-",
      r: ".-.",
      s: "...",
      t: "-",
      u: "..-",
      v: "...-",
      w: ".--",
      x: "-..-",
      y: "-.--",
      z: "--..",
    };
    return code[elem];
  }

  // Iterate through each character in each word
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      morse += decypher(words[i][j]);
    }
    // Add to set
    morseSet.add(morse);

    // Reset morse variable
    morse = "";
  }

  // Return size of set
  return morseSet.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));

// Expected : 2
