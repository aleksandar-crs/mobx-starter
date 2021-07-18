import { initAppAPI } from "./initializers/app.api";
import { initBoardAPI } from "./initializers/board.api";
import { initListAPI } from "./initializers/list.api";

export const apiInitializer = (state) => {
  initAppAPI(state);
  initBoardAPI(state);
  initListAPI(state);
}