// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

var generateParenthesis = function (n) {
  const result = [];

  function helper(open, close, string) {
    if (close === n && open === n) result.push(string);

    if (open < n) {
      helper(open + 1, close, string + "(");
    }
    if (close < open) {
      helper(open, close + 1, string + ")");
    }
  }

  helper(0, 0, "");

  return result;
};

console.log(generateParenthesis(3));

// Expected: ["((()))","(()())","(())()","()(())","()()()"]
