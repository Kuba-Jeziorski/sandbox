import { bindButtonClicks } from "./bind-clicks";
import { counterEffect } from "./counter-effect";

export const initButtons = () => {
  const incrementBtn = document.querySelector("#eta-button-increment");
  const decrementBtn = document.querySelector("#eta-button-decrement");
  const valueEl = document.querySelector("#eta-button-value");

  if (!incrementBtn || !decrementBtn || !valueEl) {
    return;
  }

  bindButtonClicks(incrementBtn, decrementBtn);
  counterEffect(valueEl);
};
