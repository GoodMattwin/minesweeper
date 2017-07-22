'use strict';

/* Codecademy solution for generatePlayerBoard
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for (let rows = 0; rows < numberOfRows; rows++) {
    row = [];
    for (let columns = 0; columns < numberOfColumns; columns++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
};

console.log(generatePlayerBoard(3, 3));
*/

var generatePlayerBoard = function generatePlayerBoard(numberOfRows, numberOfColumns) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    board.push([]);
    for (var columns = 0; columns < numberOfColumns; columns++) {
      board[rows].push(' ');
    }
  }
  return board;
};

var generateBombBoard = function generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
  var board = [];
  for (var rows = 0; rows < numberOfRows; rows++) {
    board.push([]);
    for (var columns = 0; columns < numberOfColumns; columns++) {
      board[rows].push(null);
    }
  }
  var numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    var randomRowIndex = Math.floor(Math.random() * numberOfRows);
    var randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
    board[randomRowIndex][randomColumnIndex] = 'B';
    numberOfBombsPlaced++;
    // An important note: The code in your while loop has the potential
    // to place bombs on top of already existing bombs. This will be
    // fixed when you learn about control flow.
  }
  return board;
};

var printBoard = function printBoard(board) {
  console.log(board.map(function (row) {
    return row.join(' | ');
  }).join('\n'));
};

var playerBoard = generatePlayerBoard(3, 4);
var bombBoard = generateBombBoard(3, 4, 5);

console.log('Player board: ' + printBoard(playerBoard));
console.log('Bomb board: ' + printBoard(bombBoard));