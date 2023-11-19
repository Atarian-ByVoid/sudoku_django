const board = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

function createSudokuBoard() {
  const boardContainer = document.getElementById('sudoku-board');
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.createElement('input');
      cell.setAttribute('type', 'text');
      cell.setAttribute('class', 'cell');
      cell.setAttribute('maxlength', '1');
      if (board[i][j] !== 0) {
        cell.value = board[i][j];
        cell.setAttribute('disabled', 'true');
      }
      cell.dataset.row = i;
      cell.dataset.col = j;
      boardContainer.appendChild(cell);
    }
  }
}

function checkSolution() {
  const numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  for (let i = 0; i < 9; i++) {
    const row = [];
    const col = [];
    const block = [];

    for (let j = 0; j < 9; j++) {
      const cell = document.querySelector(`[data-row="${i}"][data-col="${j}"]`);

      if (row.includes(cell.value) || cell.value === '') {
        alert('Solução inválida!');
        return;
      }
      row.push(cell.value);

      const colCell = document.querySelector(`[data-row="${j}"][data-col="${i}"]`);
      if (col.includes(colCell.value) || colCell.value === '') {
        alert('Solução inválida!');
        return;
      }
      col.push(colCell.value);

      const blockRow = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const blockCol = (i % 3) * 3 + (j % 3);
      const blockCell = document.querySelector(`[data-row="${blockRow}"][data-col="${blockCol}"]`);
      if (block.includes(blockCell.value) || blockCell.value === '') {
        alert('Solução inválida!');
        return;
      }
      block.push(blockCell.value);

      numbers.add(cell.value);
    }
  }

  if (numbers.size !== 9) {
    alert('Solução inválida!');
  } else {
    alert('Solução válida! Sudoku resolvido.');
  }
}

function resetSudoku() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    if (!cell.hasAttribute('disabled')) {
      cell.value = '';
    }
  });
}

createSudokuBoard();

document.getElementById('check-button').addEventListener('click', checkSolution);

document.getElementById('reset-button').addEventListener('click', resetSudoku);
