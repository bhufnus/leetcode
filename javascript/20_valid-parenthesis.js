/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
  1. Open brackets must be closed by the same type of brackets.
  2. Open brackets must be closed in the correct order.
  3. Every close bracket has a corresponding open bracket of the same type.
*/

function isValid(s) {
  const left = [];
  const legend = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      left.push(s[i]);
    } else if (legend[left.pop()] !== s[i]) {
      return false;
    }
  }
  return left.length ? false : true;
}

console.log(isValid("()[]{}"));

// Expected : true
