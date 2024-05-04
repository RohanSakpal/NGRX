import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppState } from './shared/store/Global/App.State';
import { EffectsModule } from '@ngrx/effects';
import { BlogEffects } from './shared/store/Blog/Blog.Effects';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { StoreRouterConnectingModule, provideRouterStore } from '@ngrx/router-store';
import { Customerserializer } from './shared/store/Router/Custom.serializer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(StoreModule.forRoot(AppState), EffectsModule.forRoot([BlogEffects]),
    StoreRouterConnectingModule.forRoot({serializer:Customerserializer})),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
    provideRouterStore()
]
};
