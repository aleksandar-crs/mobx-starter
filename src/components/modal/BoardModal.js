import React from "react";
import { observer } from "mobx-react";
import { useMobX } from "../../index";

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
            <div className="form-container">
              <form>
              <input
                type="text"
                // value={appState.dialogInputValue}
                // onChange={appState.actions.betValueDialog}
                onChange={actions.board.setTitle}
              />
              <button disabled={!helpers.board.title.length} onClick={ actions.board.addBoard}>Create board</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default BoardModal;
