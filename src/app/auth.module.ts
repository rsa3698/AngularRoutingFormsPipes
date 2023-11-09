import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth/auth.component';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'auth', component: AuthComponent },
    ])
  ]
})
export class AuthModule {

}