import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from '../projects/app/app.component';
import { config } from '../projects/app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
