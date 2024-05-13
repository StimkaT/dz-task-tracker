import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideState } from '@ngrx/store';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import {TASKS_FEATURE_KEY, TasksReducer} from "../../projects/web/src/lib/+state/tasks/tasks.reducer";
import {TasksEffects} from "../../projects/web/src/lib/+state/tasks/tasks.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideStore(),
    provideEffects(TasksEffects),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideState(TASKS_FEATURE_KEY, TasksReducer),
  ]
};
