import {createFeatureSelector, createSelector} from '@ngrx/store';
import {TASKS_FEATURE_KEY, TasksState} from './tasks.reducer';


export const selectFeature = createFeatureSelector<TasksState>(TASKS_FEATURE_KEY);

export const getTaskList = createSelector(
  selectFeature,
  (state: TasksState) => state.tasksList
);

export const getPriorityList = createSelector(
  selectFeature,
  (state: TasksState) => state.priorityList
);

export const getExecutorList = createSelector(
  selectFeature,
  (state: TasksState) => state.executorList
);

export const getStatusList = createSelector(
  selectFeature,
  (state: TasksState) => state.statusList
);

