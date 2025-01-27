import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { appRoutes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [...appConfig.providers],
});
