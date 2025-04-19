import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig = {
  providers: [
              provideRouter(routes), 
              provideHttpClient(withFetch()),
            ]
};
