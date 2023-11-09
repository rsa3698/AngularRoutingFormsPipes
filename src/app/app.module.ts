import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { RolesComponent } from './roles/roles.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { AuthGuardsService } from './services/guards/auth-guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { UserService } from './services/user.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { ShortenPipe } from './pipes/shorten.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptors.service';
import { LoggingInterceptorService } from './services/logging-interceptor.service';
import { AuthComponent } from './auth/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthTokenInterceptorService } from './services/auth-token-interceptor.service';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from './shared/placeholder.directive';
import { UserModule } from './user.module';
import { PostModule } from './post.module';
import { FilterModule } from './filter.module';
import { SharedModule } from './shared.module';
import { CoreModule } from './core.module';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    RolesComponent,
    PageNotFoundComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    // FilterPipesComponent,
    // ShortenPipe,
    // FilterPipe,
    AuthComponent,
    LoadingSpinnerComponent,
    NavigationComponent,
    AlertModalComponent,
    PlaceholderDirective
  
  ],
  imports: [
    BrowserModule,   CoreModule,  UserModule , PostModule ,FilterModule,AppRoutingModule,FormsModule,ReactiveFormsModule, HttpClientModule ,SharedModule
  ],
  // providers: [AuthService , AuthGuardsService ,DeactivateGuardService, UserResolveService, UserService , {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptorService,
  //   multi: true,
  // },
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: LoggingInterceptorService,
  //   multi: true,
  // },
  // {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthTokenInterceptorService,
  //   multi: true,
  // },
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
