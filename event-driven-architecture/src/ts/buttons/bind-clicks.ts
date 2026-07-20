import { fromEvent } from "rxjs";
import { incrementClicked$, decrementClicked$ } from "./events";

export const bindButtonClicks = (
  incrementBtn: Element,
  decrementBtn: Element,
) => {
  fromEvent(incrementBtn, "click").subscribe(() => incrementClicked$.next());
  fromEvent(decrementBtn, "click").subscribe(() => decrementClicked$.next());
};
