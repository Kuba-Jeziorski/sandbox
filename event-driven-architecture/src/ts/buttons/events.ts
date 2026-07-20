import { Subject } from "rxjs";

type SubjectType = {
  value: number;
  name: string;
};

export const incrementClicked$ = new Subject<SubjectType>();
export const decrementClicked$ = new Subject<SubjectType>();
