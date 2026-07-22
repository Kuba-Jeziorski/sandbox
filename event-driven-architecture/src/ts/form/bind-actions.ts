import { fromEvent, tap } from "rxjs";
import { completedForm$, inputChanges$ } from "./events";

export const bindActions = (form: HTMLFormElement) => {
  fromEvent(form, "input").subscribe((event) => {
    const { target } = event;
    // only inputs are allowed
    if (!(target instanceof HTMLInputElement)) {
      return;
    }

    // below object is passed to the Subject
    inputChanges$.next({
      name: `fillInput${target.name}`,
      field: target.name as "name" | "email",
      value: target.value,
    });
  });

  fromEvent(form, "submit")
    .pipe(
      // early refresh prevent
      tap((event) => {
        event.preventDefault();
      }),
    )
    .subscribe((event) => {
      const form = event.target as HTMLFormElement;
      // object made out of all inputs in passed form
      const data = Object.fromEntries(new FormData(form));

      completedForm$.next({ name: "completedForm$", values: data });
    });
};
