import { filter, tap } from "rxjs";
import { completedForm$, inputChangesDebounced$ } from "./events";

export const displayCurrentValue = () => {
  // Derived stream (observable)
  inputChangesDebounced$
    .pipe(
      filter((obj) => obj.value.length > 2),
      tap((obj) => console.log(obj.value)),
    )
    .subscribe();

  completedForm$
    .pipe(
      tap((obj) => {
        console.log(obj.values);
      }),
    )
    .subscribe();
};
