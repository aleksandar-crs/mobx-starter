import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useMobX } from "../../index";
import { Link } from "react-router-dom";
import Board from "../../components/board/Board";
import BoardModal from "../../components/modal/BoardModal";
import Navbar from "../../components/navbar/Navbar";

const HomePage = observer(() => {
  const { actions, helpers } = useMobX();

  useEffect(() => {
    actions.board.setBoards();
  }, []);

  return (
    <div className={"home-container"}>
      <Navbar />
      <div className={"flex-center"}>
        {Array.from(helpers.board.boards).map((board, index) => (
          <Link
            className="board"
            onClick={(e) => actions.board.setSelectedBoard(e, board)}
            key={board.id}
            to={`/${board.id}/${board.name}`}
          >
            <Board key={index} name={board.name} />
          </Link>
        ))}
        <button className={"board"} onClick={() => actions.board.showModal()}>
          Create new board
        </button>
      </div>
      <BoardModal />
    </div>
  );
});

export default HomePage;
