import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useMobX } from "../../index";
import { Link } from "react-router-dom";
import Board from "../../components/board/Board";

const BoardModal = observer(() => {
  const { actions, helpers } = useMobX();

  return (
    <div>
      {helpers.board.showModal && (
        <div className="overlay">
          <div className="dialog">
            <div className="align-center dialog-header">
              <button
                className="close-button"
                onClick={ () => actions.board.hideModal()}
              >
                X
              </button>
            </div>
            <div style={{ padding: "15px", backgroundColor: "#f9f9f9" }}>
              <input
                type="text"
                // value={appState.dialogInputValue}
                // onChange={appState.actions.betValueDialog}
                onChange={actions.board.setTitle}
              />
              <button onClick={ actions.board.addBoard}>Create board</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default BoardModal;
