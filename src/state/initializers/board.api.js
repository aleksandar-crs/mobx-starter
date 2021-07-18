import { action, toJS } from "mobx";

export const initBoardAPI = (state) => {
  const { actions } = state;

  const url = `https://api.trello.com/1/members/me/boards?fields=name,url&key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}`;

  actions.board = {
    setBoards: action("setBoards", (data) => {
      return fetch(url).then((res) =>
        res.json().then((data) => {
          const value = data;
          state.board.boards = value
        } 
      ))
    }),

    showModal: action("showModal", () => {
      state.board.showModal = true;
    }),

    hideModal: action("hideModal", () => {
      state.board.showModal = false;
    }),

    setTitle: action("setTitle", (e) => {
      state.board.title = e.target.value;
    }),

    addBoard: action("addBoard", (e) => {
      const url = `https://api.trello.com/1/boards/?key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}&name=${state.board.title}`;
      e.preventDefault();
      fetch(url, {
        method: "POST",
      }).then(res =>  res.json().then((data) => {
        actions.board.hideModal()
        actions.board.setBoards(data);
      })

      );
      
    }),

    setSelectedBoard: action("setSelectedBoard", (e, board) => {
      e.stopPropagation();
      console.log(toJS(board));
      state.board.selectedBoard = board;
    })
  };
};
