import { createReducer, on } from '@ngrx/store';
import { selectCourse } from './course.actions';
import { initialState } from './course.state';

export const courseReducer = createReducer(
  initialState,

  on(selectCourse, (state, { id }) => ({
    ...state,
    selectedCourseId: id
  }))
);