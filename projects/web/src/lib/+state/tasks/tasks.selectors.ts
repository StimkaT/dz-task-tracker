import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TASKS_FEATURE_KEY, TasksState} from './tasks.reducer';


export const selectFeature = createFeatureSelector<TasksState>(TASKS_FEATURE_KEY);

export const getTaskList = createSelector(
  selectFeature,
  (state: TasksState) => state
);
