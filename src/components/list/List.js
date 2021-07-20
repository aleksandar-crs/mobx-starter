import React, { useState } from 'react';
import "./list.styles.scss";

const List = ({list}) => {
  const [showInput, hideInput] = useState(false)

  return (
    <div className="list">
      <h3>{list.name}</h3>
      { showInput && <div>
        <textarea placeholder="add title" />
        <button>+ add card</button>
        {console.log(list.name)}
        <span onClick={ () => hideInput(false)}>ooooo</span>
      </div> }
      {!showInput &&  <button onClick={() => hideInput(true)}>Add a card</button> }
    </div>
  );
};

export default List;
