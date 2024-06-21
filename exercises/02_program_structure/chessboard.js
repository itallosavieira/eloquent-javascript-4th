const SIZE = 8;

function constructLine(...pattern) {
  let line = '';
  while(line.length < SIZE) {
    line += pattern.join('');
  }
  return line + '\n';
}

function constructBoard(...lines) {
  let board = '';
  while(board.length <= (SIZE * SIZE)) {
    board += lines.join('');
  }
  return board;
}

const primaryLine = constructLine(' ', '#');
const secondaryLine = constructLine('#', ' ');
const chessBoard = constructBoard(primaryLine, secondaryLine);

console.log(chessBoard);