import { distinctUntilChanged, map, merge, scan, tap } from "rxjs";
import { incrementClicked$, decrementClicked$ } from "./events";

const MAX_VALUE = 10;

export const counterEffect = (valueEl: Element) => {
  merge(
    incrementClicked$.pipe(map((obj) => obj.value * 2)),
    decrementClicked$.pipe(map((obj) => obj.value * 2)),
  )
    .pipe(
      scan((total, step) => {
        const next = total + step;
        return next <= MAX_VALUE ? next : total;
      }, 0),
      distinctUntilChanged(),
      tap((value) => {
        valueEl.textContent = String(value);
      }),
    )
    .subscribe();
};
