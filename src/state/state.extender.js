import { initAppState } from "./extenders/app.state";
import { initBoardState } from "./extenders/board.state";
import { initCardState } from "./extenders/card.state";
import { initListState } from "./extenders/list.state";

export const stateExtender = (state) => {
  initAppState(state);
  initBoardState(state);
  initListState(state);
  initCardState(state);
}