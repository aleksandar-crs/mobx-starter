import React, { useState } from 'react';
// import "./list.scss";

const List = (props) => {
  const [showInput, hideInput] = useState(false)
  
  return (
    <div className="list">
      <h3>{props.name}</h3>
      {showInput && 
      <textarea placeholder="add title"></textarea> }
      <button onClick={() => hideInput(true)}>Add a card</button>
    </div>
  );
};

export default List;