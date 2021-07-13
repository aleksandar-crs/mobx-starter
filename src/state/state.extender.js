import { initAppState } from "./extenders/app.state";

export const stateExtender = (state) => {
  initAppState(state);
}