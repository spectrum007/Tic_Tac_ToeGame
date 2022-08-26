import React from "react";

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every((element) => element !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player is{" "}
          <span className={current.isXnext ? "text-green" : "text-orange"}>
            {current.isXnext ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">O</span> and{" "}
          <span className="text-orange">X</span> tied
        </>
      )}
    </div>
  );
};

export default StatusMessage;
