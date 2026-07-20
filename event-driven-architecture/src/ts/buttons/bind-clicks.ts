import { fromEvent } from "rxjs";
import { incrementClicked$, decrementClicked$ } from "./events";

export const bindButtonClicks = (
  incrementBtn: Element,
  decrementBtn: Element,
) => {
  fromEvent(incrementBtn, "click").subscribe(() =>
    incrementClicked$.next({ value: 1, name: "incrementClicked$" }),
  );
  fromEvent(decrementBtn, "click").subscribe(() =>
    decrementClicked$.next({ value: -1, name: "decrementClicked$" }),
  );
};
