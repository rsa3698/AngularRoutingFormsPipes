import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AuthGuardsService } from './services/guards/auth-guard.service';
import { DeactivateGuardService } from './services/guards/deactivate-guard.service';
import { UserResolveService } from './services/resolvers/user-resolve.service';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { FilterPipesComponent } from './filter-pipes/filter-pipes.component';
import { PostComponent } from './post/post.component';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthGuard } from './services/guards/auth.guard';

const appRoutes : Routes =[
  { path: '' , component : HomeComponent , data:{page: 1, search: 'RSA'}},
  {path: 'users', loadChildren: () => import ('./user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import ('./post.module').then(m => m.PostModule)},
  // { path: 'users' ,
  //   component : UsersComponent,
  //   // canActivate : [AuthGuardsService],
  //   canActivateChild : [AuthGuardsService],
  //   children : [
  //     {path: ':id/:name' , component:UserComponent},
  //     {path: ':id/:name/edit' , component:EditUserComponent , canDeactivate :[DeactivateGuardService] ,resolve : [UserResolveService]},

  //   ]},
  // { path: 'users/:id/:name' , component : UserComponent},
  { path: 'categories' , component : CategoriesComponent},
  { path: 'template-form' ,component : TemplateFormComponent},
  { path: 'reactive-form' ,component : ReactiveFormComponent},
  { path: 'filter-pipes' ,component : FilterPipesComponent},
  { path: 'auth' ,component : AuthComponent},
  { path: 'not-found' , component : PageNotFoundComponent},
  // { path: 'post' , component:PostComponent , canActivate : [AuthGuard]},
  { path: '**' , redirectTo: 'not-found'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes , {useHash:true})
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
