import { ApplicationConfig } from '@angular/core';
import {
  TitleStrategy,
  provideRouter,
  withComponentInputBinding
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TemplatePageTitleStrategy, appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideAnimations(), 
    {
      provide: TitleStrategy,
      useClass: TemplatePageTitleStrategy,
    },
    
  ],
};
