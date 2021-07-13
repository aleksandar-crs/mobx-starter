import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { observable, toJS } from "mobx";
import { Provider } from "mobx-react";
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

ReactDOM.render(
  <Provider state={state} actions={state.actions} helpers={state.helpers}>
    <App state={state} />
  </Provider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
