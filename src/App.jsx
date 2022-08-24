import React, { useState } from "react";
import Board from "./Components/Board";
import { calculateWinner } from "./helper";
import "./Styles/root.scss";

const App = () => {
  const [board, SetBoard] = useState(Array(9).fill(null));
  const [isXnext, setIsXnext] = useState(false);
  const winner = calculateWinner(board);
  const CheckAllboxexareFilled = board.every((element) => element !== null);

  const msg = winner
    ? `winner is ${winner}`
    : CheckAllboxexareFilled
    ? `Game Tie`
    : `Next player is ${isXnext ? "X" : "O"}`;
  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }
    SetBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXnext ? "X" : "O";
        }
        return square;
      });
    });
    setIsXnext((prev) => {
      if (prev === false) {
        return true;
      }
      return false;
    });
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe game </h1>
      <h2> {msg}</h2>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
};
export default App;
