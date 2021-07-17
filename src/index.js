import React, { createContext, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { observable, toJS } from "mobx";
import { stateExtender } from "./state/state.extender";
import { apiInitializer } from "./state/api.initializer";

const state = observable({
  helpers: {},
  actions: {},
});

apiInitializer(state);
stateExtender(state);
window.state = state;
window.actions = state.actions;
window.helpers = state.helpers;

window.toJS = toJS;

const RootStoreContext = createContext(null);

export const Provider = RootStoreContext.Provider;

export function useMobX() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}



ReactDOM.render(
  <Provider value={{ state, actions: state.actions, helpers: state.helpers }}>
    <App state={state} />
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
