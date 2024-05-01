import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { counterReducer } from './shared/store/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { blogReducer } from './shared/store/Blog/Blog.reducer';
import { AppState } from './shared/store/Global/App.State';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(StoreModule.forRoot(AppState)),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
]
};
