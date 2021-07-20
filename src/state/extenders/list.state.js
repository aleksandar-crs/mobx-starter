import { extendObservable } from "mobx";

export const initListState = (state) => {
  const { helpers } = state;

  extendObservable(state, {
    list: {
      lists: [],
      name: "",
      showNewListForm: true,
      selectedList: {},
      showCardForm: false,
    },
  });

  extendObservable(helpers, {
    list: {
      get lists() {
        return state.list.lists;
      },
      get name() {
        return state.list.name;
      },
      get showNewListForm() {
        return state.list.showNewListForm;
      },
      get selectedList() {
        return state.list.selectedList;
      },
      get showCardForm() {
        return state.list.showCardForm;
      },
    },
  });
};
