import React, { useEffect, useState } from "react";
import List from "../list/List.js";
import { observer } from "mobx-react";
import { useMobX } from "../../index";
import "./lists.styles.scss"

const Lists = observer(({ match }) => {
  const { actions, helpers } = useMobX();
  const [showInput, hideInput] = useState(false);

  const boardId = match.params.boardID;

  useEffect(() => {
    actions.list.setLists(boardId);
  }, [actions.list, boardId, helpers.list.lists]);

  return (
    <div className={"flex lists-container"}>
      {Array.from(helpers.list.lists).map((list) => (
        <List
          key={list.id}
          list={list}
        />
      ))}
      <div className="form-container">
        {helpers.list.showNewListForm ? (
          <button className="list add-btn" onClick={() => actions.list.hideNewListForm()}>
            + Add another list...
          </button>
        ) : (
          <form className="list">
            <input
              type="text"
              value={helpers.list.name}
              onChange={actions.list.setListName}
              placeholder="Enter list title..."
            />
            <br />
            <button className="submit-btn" onClick={(e) => actions.list.addNewList(e, boardId)}>
              Add list
            </button>
            <span onClick={() => actions.list.showNewListForm()}>ooooo</span>
          </form>
        )}
      </div>
    </div>
  );
});

export default Lists;
