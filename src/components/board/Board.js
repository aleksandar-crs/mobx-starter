import React from 'react';
// import "./Board.scss";

const Board = (props) => {
  return (
    <div className="board">
      <h3>{props.name}</h3>
    </div>
  );
};

export default Board;