import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../projects/app/app.config';
import { AppComponent } from '../projects/app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
