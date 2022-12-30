/*
    Given a string s consisting of words and spaces, return the length of the last word in the string.

    A word is a maximal substring consisting of non-space characters only.
 */

var lengthOfLastWord = function (s) {
  let splitWords = s.split(" ");
  let lastWord = splitWords.pop();
  while (lastWord.length === 0) {
    lastWord = splitWords.pop();
  }
  console.log(lastWord.length);
  return lastWord.length;
};

lengthOfLastWord("   fly me   to   the moon  ");

// Expected : 4
