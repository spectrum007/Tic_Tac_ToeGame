import React, { useState } from "react";
import Board from "./Components/Board";
import History from "./Components/History";
import StatusMessage from "./Components/StatusMessage";
import { calculateWinner } from "./helper";
import "./Styles/root.scss";

const NewGame = [{ board: Array(9).fill(null), isXnext: false }];

const App = () => {
  const [history, Sethistory] = useState(NewGame);
  const [currentMove, SetcurrentMove] = useState(0);
  const current = history[currentMove];

  const { Winner, WinningSquares } = calculateWinner(current.board);

  const handleSquareClick = (position) => {
    if (current.board[position] || Winner) {
      return;
    }
    Sethistory((prev) => {
      const last = prev[prev.length - 1];

      const newBaord = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? "X" : "O";
        }
        return square;
      });
      return prev.concat({ board: newBaord, isXnext: !last.isXnext });
    });
    SetcurrentMove((prev) => prev + 1);
  };
  const moveTo = (move) => {
    SetcurrentMove(move);
  };
  const OnNewGame = () => {
    Sethistory(NewGame);
    SetcurrentMove(0);
  };
  return (
    <div className="app">
      <h1>Tic Tac Toe game </h1>
      <StatusMessage winner={Winner} current={current} />
      <Board
        board={current.board}
        handleSquareClick={handleSquareClick}
        winningSquares={WinningSquares}
      />
      <button type="button" onClick={OnNewGame}>
        Start new Game
      </button>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
};
export default App;
