import { extendObservable } from "mobx";

export const initListState = (state) => {
  const { actions, helpers } = state;

  extendObservable(state, {
    list: {
      lists: [],
      name: "",
      showForm: true,
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
      get showForm() {
        return state.list.showForm;
      },
    },
  });
};
