import React, { useState } from 'react';
import "./list.styles.scss";
import { useMobX } from "../../index";


const List = ({list}) => {
  const [showInput, hideInput] = useState(false);
  const { actions} = useMobX();

  return (
    <div className="list">
      <h3>{list.name}</h3>
      <span onClick={() => actions.list.deleteList(list.id)}>delete</span>
      { showInput && <div>
        <textarea placeholder="add title" />
        <button onClick={() => actions.list.setSelectedList(list)}>+ add card</button>
        {/* {console.log(list.name)} */}
        <span onClick={ () => hideInput(false)}>ooooo</span>
      </div> }
      {!showInput &&  <button onClick={() => hideInput(true)}>Add a card</button> }
    </div>
  );
};

export default List;
