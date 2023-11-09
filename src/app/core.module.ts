
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UserService } from './services/user.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';

import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { LoggingInterceptorService } from './services/logging-interceptor.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './services/auth-interceptors.service';
import { AuthGuardsService } from './services/guards/auth-guard.service';

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: LoggingInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptorService,
    multi: true,
  },
  AuthGuardsService,
  DeactivateGuardService,
  UserService,
  UserResolveService]
})
export class CoreModule {

}