import { extendObservable } from "mobx";

export const initCardState = (state) => {
  const { helpers } = state;

  extendObservable(state, {
    card: {
      cards: [],
      name: "",
      showForm: true,
    },
  });

  extendObservable(helpers, {
    card: {
      get cards() {
        return state.card.cards;
      },
      get name() {
        return state.card.name;
      },
      get showForm() {
        return state.card.showForm;
      },
    },
  });
};
