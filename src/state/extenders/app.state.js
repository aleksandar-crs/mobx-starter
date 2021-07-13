import { extendObservable } from "mobx";

export const initAppState = (state) => {
  const { actions, helpers } = state;

  extendObservable(state, {
    app: {
      testValue: 40,
    },
  });

  extendObservable(helpers, {
    app: {
      get testValue() {
        return state.app.testValue;
      },
    },
  });
};
