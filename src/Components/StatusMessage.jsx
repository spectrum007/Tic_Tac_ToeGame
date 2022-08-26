import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every((element) => element !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !noMovesLeft &&
        `Next player is ${current.isXnext ? "X" : "O"}`}
      {!winner && noMovesLeft && `Game Tie `}
    </h2>
  );
};

export default StatusMessage;
