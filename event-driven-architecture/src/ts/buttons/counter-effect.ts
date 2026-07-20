import { incrementClicked$, decrementClicked$ } from "./events";

export const counterEffect = (valueEl: Element) => {
  let value = 0;

  incrementClicked$.subscribe(() => {
    value += 1;
    valueEl.textContent = String(value);
  });

  decrementClicked$.subscribe(() => {
    value -= 1;
    valueEl.textContent = String(value);
  });
};
