import { extendObservable, observable } from "mobx";

export const initBoardState = (state) => {
  const { helpers } = state;

  extendObservable(state, {
    board: {
      boards: observable.map({}),
      showModal: false,
      title: "",
      selectedBoard: ""
    },
  });

  extendObservable(helpers, {
    board: {
      get boards() {
        return state.board.boards;
      },
      get showModal() {
        return state.board.showModal;
      },
      get title() {
        return state.board.title;
      },
      get selectedBoard() {
        return state.board.selectedBoard;
      },
    },
  });
};
