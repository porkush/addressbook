import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig = {
  providers: [
    provideRouter([
      // You can define your routes here
    ]),
    provideAnimations()
  ]
};
