import { action } from "mobx";

export const initAppAPI = (state) => {
  const { actions, helpers } = state;

  actions.app = {
    setTestValue: action("setTestValue", (newValue) => {
      state.app.testValue = newValue;
    }),
  };
};
