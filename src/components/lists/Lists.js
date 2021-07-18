import React, { useEffect, useState } from "react";
import List from "../list/List.js";
import { observer } from "mobx-react";
import { useMobX } from "../../index";
// import "./lists."

const Lists = observer(({ match }) => {
  const { actions, helpers } = useMobX();

  const boardId = match.params.boardID;

  useEffect(() => {
    actions.list.setLists();
  }, [actions.list, boardId, helpers.list.lists]);

  return (
    <div>
      Lists
      {Array.from(helpers.list.lists).map((list) => {
        return <List name={list.name}></List>;
      })}
      {helpers.list.showForm ? (
        <button onClick={ () => actions.list.hideForm()}>Add another list...</button>
      ) : (
        <form>
          <input 
            type="text" 
            value={helpers.list.name}
            onChange={actions.list.setListName} />
              <br/>
          <button onClick={actions.list.addNewList}>Add list</button>
        </form>
      )}
    </div>
  );
});

export default Lists;
