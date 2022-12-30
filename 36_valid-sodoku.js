/**
    Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

    Each row must contain the digits 1-9 without repetition.
    Each column must contain the digits 1-9 without repetition.
    Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
 */

var isValidSudoku = function (board) {
  return !!(
    validateRows(board) &&
    validateColumns(board) &&
    validateBoxes(board)
  );
};

function validateRows(board) {
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      if (num === ".") continue;
      if (set.has(num)) return false;
      set.add(num);
    }
  }
  return true;
}

function validateColumns(board) {
  for (let i = 0; i < 9; i++) {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      const num = board[j][i];
      if (num === ".") continue;
      if (set.has(num)) return false;
      set.add(num);
    }
  }
  return true;
}

function validateBoxes(board) {
  for (let i = 0; i < 9; i++) {
    let rowi = Math.floor(i / 3) * 3;
    let coli = (i % 3) * 3;

    const set = new Set();
    for (let r = rowi; r < rowi + 3; r++) {
      for (let c = coli; c < coli + 3; c++) {
        const num = board[r][c];
        if (num === ".") continue;
        if (set.has(num)) return false;
        set.add(num);
      }
    }
  }
  return true;
}

// Tests

// board1 Expected: True
let board1 = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

// board2 Expected: False
let board2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(board1));
