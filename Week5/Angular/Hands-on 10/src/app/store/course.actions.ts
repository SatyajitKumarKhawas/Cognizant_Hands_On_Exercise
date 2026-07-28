import { createAction, props } from '@ngrx/store';

export const selectCourse = createAction(
  '[Course] Select Course',
  props<{ id: number }>()
);