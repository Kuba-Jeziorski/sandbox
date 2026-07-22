import { bindActions } from "./bind-actions";
import { displayCurrentValue } from "./display-current-value";

export const initForm = () => {
  const form = document.querySelector("#eta-form") as HTMLFormElement;

  if (!form) {
    return;
  }

  bindActions(form);
  displayCurrentValue();
};
