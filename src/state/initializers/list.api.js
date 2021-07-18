import { action } from "mobx";

export const initListAPI = (state) => {
  const { actions, helpers } = state;

  const bid = window.location.pathname.split("/")[1];

  actions.list = {
    setLists: action("setLists", () => {
      const url = `https://api.trello.com/1/boards/${bid}/lists?key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}`;
      fetch(url).then((res) =>
        res.json().then((data) => (state.list.lists = data))
      );
    }),

    setListName: action("setListName", (e) => {
      state.list.name = e.target.value;
    }),

    hideForm: action("hideForm", () => {
      state.list.showForm = false;
    }),

    addNewList: action("addNewList", (e) => {
      e.preventDefault();
      const url = `https://api.trello.com/1/lists?key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}&name=${helpers.list.name}&idBoard=${bid}`;
      fetch(url, {
        method: "POST",
      }).then((res) =>
        res.json().then((data) => {
          state.list.lists = data;
          state.list.name = "";
          actions.list.hideForm();
        })
      );
    }),
  };
};
