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
  }, [helpers.list.lists]);

  // helpers.list.lists.findIndex((ix) => console.log(toJS(ix)))

  return (
    <div className={"flex lists-container"}>
      {Array.from(helpers.list.lists).map((list) => (
        <List
          onClick={() => console.log("lala")}
          style={{ backgroundColor: "red" }}
          key={list.id}
          list={list}
        />
      ))}
      <div className="form-container">
        {helpers.list.showForm ? (
          <button className="list add-btn" onClick={() => actions.list.hideForm()}>
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
            <span onClick={() => actions.list.showForm()}>ooooo</span>
          </form>
        )}
      </div>
    </div>
  );
});

export default Lists;
