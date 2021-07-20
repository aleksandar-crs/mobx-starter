import { action } from "mobx";

export const initListAPI = (state) => {
  const { actions, helpers } = state;

  actions.list = {
    setLists: action("setLists", (paramId) => {
      const url = `https://api.trello.com/1/boards/${paramId}/lists?key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}`;
      return fetch(url).then((res) =>
        res.json().then((data) => {
          data.forEach((list) => (list.isClosed = false));
          state.list.lists = data;
        })
      );
    }),

    setListName: action("setListName", (e) => {
      state.list.name = e.target.value;
    }),

    hideNewListForm: action("hideNewListForm", () => {
      state.list.showNewListForm = false;
    }),

    showNewListForm: action("showNewListForm", () => {
      state.list.showNewListForm = true;
    }),

    addNewList: action("addNewList", (e, paramId) => {
      e.preventDefault();
      const url = `https://api.trello.com/1/lists?key=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}&name=${helpers.list.name}&idBoard=${paramId}`;
      fetch(url, {
        method: "POST",
      }).then((res) =>
        res.json().then((data) => {
          state.list.lists = data;
          state.list.name = "";
          state.list.showNewListForm = true;
        })
      );
    }),

    setSelectedList: action("setSelectedList", (list) => {
      state.list.selectedList = list;
    }),

    showCardForm: action("showCardForm", (event) => {
      state.list.showCardForm = true;

      // const listId = event.currentTarget.getAttribute("data-list");

      // const lista = helpers.list.lists.findIndex(lis => {
      //   return lis.id === listId;
      // })

      // return state.list.lists.forEach(list => list[lista].isClosed = true);

      // console.log(lista);

      // if(lista > -1) {
      //   state.list.lists[lista].isClosed = true;
      // }
      // state.list.selectedList = list;
    }),

    hideCardForm: action("hideCardForm", () => {
      state.list.showCardForm = false;
    }),
    deleteList: action("deleteList", (id) => {
      console.log(id);
      const url = `https://api.trello.com/1/lists/${id}/closedkey=${process.env.REACT_APP_KEY}&token=${process.env.REACT_APP_TOKEN}`;
      fetch(url, {
        method: "PUT"
      })
        .then(() => {
          console.log("setting list");
          actions.list.setLists();
        })
        .catch((error) => console.log("error ", error));
    }),
  };
};
