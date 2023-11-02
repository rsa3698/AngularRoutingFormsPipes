import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  constructor(private router:Router , private user: UserService){
    
  }
  onCategoriesClick(){
    //this.router.navigateByUrl('/categories');
    this.router.navigate(['categories']);
  }

  onUserAddedClick(){
    this.user.addUser();
  }
}
