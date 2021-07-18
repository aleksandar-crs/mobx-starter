import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useMobX } from "../../index";
import { Link } from "react-router-dom";
import Board from "../../components/board/Board";
import BoardModal from "../../components/modal/BoardModal";

const HomePage = observer(() => {
  const { actions, helpers } = useMobX();

  useEffect(() => {
    actions.board.setBoards();
  }, [actions.board]);

  return (
    <div>
      Home
      {Array.from(helpers.board.boards).map((board, index) => (
        <Link onClick={ (e) => actions.board.setSelectedBoard(e, board)} key={board.id} to={`/${board.id}/${board.name}`}>
          <Board key={index} name={board.name} />
        </Link>
      ))}
      <button onClick={ () => actions.board.showModal()}>create new board</button>
      <BoardModal />
    </div>
  );
});

export default HomePage;
