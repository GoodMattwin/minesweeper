// Goodwin solution for generatePlayerBoard

//
// Ideas
//
// - Use object for board with row, column, bomb and name as properties
// - Have user input number of rows, columns and bombs, or choose pre-made
//    boards (easy, medium, hard).
// - Possibly only allow user to choose row and column and number of bombs
//    is automatic based on board size

// const generateBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
//   let board = [], bombBoard = [];
//   for (let rows = 0; rows < numberOfRows; rows++) {
//     board.push([]); bombBoard.push([]);
//     for (let columns = 0; columns < numberOfColumns; columns++) {
//       board[rows].push(' '); bombBoard[rows].push(null);
//     }
//   }
//   let numberOfBombsPlaced = 0;
//   while (numberOfBombsPlaced < numberOfBombs) {
//     let randomRowIndex = Math.floor(Math.random() * numberOfRows);
//     let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
//     if (bombBoard[randomRowIndex][randomColumnIndex] !== 'B') {
//       bomBoard[randomRowIndex][randomColumnIndex] = 'B';
//       numberOfBombsPlaced++;
//     } // else restart loop without incrementing numberOfBombsPlaced
//   }
//   return board;
// };
//
// const printBoard = board => {
//   console.log(board.map(row => row.join(' | ')).join('\n'));
// };
//
// let bombBoard = generateBoard(3, 4, 5);
//
// console.log('Player board: ');
// printBoard(playerBoard);
// console.log('Bomb board: ');
// printBoard(bombBoard);

const randomNumber = range => Math.floor(Math.random() * range);

function buildBoard(rows, columns, fill) {
  this.board = [];
  for (let r = 0; r < rows; r++) {
    this.board.push([]);
    for (let c = 0; c < columns; c++) {
      this.board[r].push(fill);
    }
  }
}

function placeBombs(numberOfBombs, bombBoard) {
  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    let randomRowIndex = randomNumber(bombBoard.rows);
    let randomColumnIndex = randomNumber(bombBoard.columns);
    if (bombBoard.board[randomRowIndex][randomColumnIndex] !== 'B') {
      bombBoard.board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
    } // else restart loop without incrementing numberOfBombsPlaced
  }
}

function startGame(rows, columns, bombs) {
  let player = new buildBoard(rows, columns, ' ');
  let bomb = new buildBoard(rows, columns, null);
  console.log('Player: ');
  console.log(player.board);
  console.log('Bombs: ');
  console.log(bomb.board);
}

startGame(3,3,5);
