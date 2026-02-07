import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
// CHANGE THIS LINE: Change { App } to { AppComponent }
import { AppComponent } from './app/app'; 

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));