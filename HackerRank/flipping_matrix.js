/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 */

function flippingMatrix(matrix) {
  // Write your code here
  console.log(...matrix);
  console.log(119 + 114 + 125 + 56);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {}
  }
}

function main() {
  let matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ];

  // let matrix = Array(2 * n);

  flippingMatrix(matrix);
}

main();

// Expected : 414
