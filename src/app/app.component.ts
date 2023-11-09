import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , OnDestroy{
  title = 'AngularRoutingFormsPipes';
  userAdded : boolean = false;
  userAddedSubscription : Subscription
  constructor(private authService : AuthService , private userService : UserService){

  }

  ngOnInit(){
    this.authService.autoLogin();
    this.userAddedSubscription=this.userService.userAddedEvent.subscribe((data)=>{
      this.userAdded = data;
    })
  }
  onLoginClick(){
   //this.authService.login();

  }

  onLogOutClick(){
   this.authService.logout();
  }

  ngOnDestroy(){
   this.userAddedSubscription.unsubscribe();
  }
  
}
