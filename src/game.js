/*
ESlint is not a fan of the underscore beginnings
that the class says I should put in and is calling
an error on every single one of them.

ESlint also believes that my console logs are
invalid because there isn't a console.
*/

import { Board } from './board';

class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Game Over! Final Board:');
      this._board.print();
    } else if (!this._board.hasNonBombEmptySpaces()) {
      console.log('Congratulations, you won!');
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }
}
