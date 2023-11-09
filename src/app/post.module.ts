import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './services/guards/auth.guard';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'post', component: PostComponent, canActivate: [AuthGuard] },
    ])
  ]
})
export class PostModule {

}