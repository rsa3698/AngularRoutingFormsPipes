import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes : Routes =[
  { path: '' , component : HomeComponent},
  { path: 'users' ,
    component : UsersComponent,
    children : [
      {path: ':id/:name' , component:UserComponent},
      {path: ':id/:name/edit' , component:EditUserComponent},

    ]},
  // { path: 'users/:id/:name' , component : UserComponent},
  { path: 'categories' , component : CategoriesComponent},
  { path: 'not-found' , component : PageNotFoundComponent},
  { path: '**' , redirectTo: 'not-found'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule { }
