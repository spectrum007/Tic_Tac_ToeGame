import React, { useState } from "react";
import Board from "./Components/Board";
import { calculateWinner } from "./helper";
import "./Styles/root.scss";

const App = () => {
  const [history, Sethistory] = useState([
    {
      board: Array(9).fill(null),
      isXnext: false,
    },
  ]);
  console.log(history);
  const [currentMove, SetcurrentMove] = useState(0);
  const current = history[currentMove];

  const winner = calculateWinner(current.board);
  const CheckAllboxexareFilled = current.board.every(
    (element) => element !== null
  );

  const msg = winner
    ? `winner is ${winner}`
    : CheckAllboxexareFilled
    ? `Game Tie`
    : `Next player is ${current.isXnext ? "X" : "O"}`;
  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
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

  return (
    <div className="app">
      <h1>Tic Tac Toe game </h1>
      <h2> {msg}</h2>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
