import {
  debounceTime,
  distinctUntilChanged,
  groupBy,
  mergeMap,
  share,
  Subject,
} from "rxjs";

type FormSubjectType = {
  name: string;
  values: {
    [k: string]: FormDataEntryValue;
  };
};

type InputSubject = { name: string; field: "name" | "email"; value: string };

// Subject
export const inputChanges$ = new Subject<InputSubject>();

// Observable - not allowed to use .next() method; only readable
// derived stream with build-in debounce and distingUntilChanged
// this way there is no need to duplicate debounce/disting code elsewhere
export const inputChangesDebounced$ = inputChanges$.pipe(
  // distinguish streams by obj.field (name or email)
  groupBy((obj) => obj.field),
  // for each stream (from groupBy) apply below steps
  mergeMap((field$) =>
    field$.pipe(
      debounceTime(300),
      distinctUntilChanged(
        (prev, curr) => prev.field === curr.field && prev.value === curr.value,
      ),
    ),
  ),
  // shared debounce timer between streams
  share(),
);
export const completedForm$ = new Subject<FormSubjectType>();
