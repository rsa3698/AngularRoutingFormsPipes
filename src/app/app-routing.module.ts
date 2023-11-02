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

const appRoutes : Routes =[
  { path: '' , component : HomeComponent , data:{page: 1, search: 'RSA'}},
  { path: 'users' ,
    component : UsersComponent,
    // canActivate : [AuthGuardsService],
    canActivateChild : [AuthGuardsService],
    children : [
      {path: ':id/:name' , component:UserComponent},
      {path: ':id/:name/edit' , component:EditUserComponent , canDeactivate :[DeactivateGuardService] ,resolve : [UserResolveService]},

    ]},
  // { path: 'users/:id/:name' , component : UserComponent},
  { path: 'categories' , component : CategoriesComponent},
  { path: 'not-found' , component : PageNotFoundComponent},
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
