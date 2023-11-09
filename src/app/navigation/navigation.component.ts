import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit{

  isAuthenticated = false;
  constructor(private authService : AuthService){
    
  }

  ngOnInit() {
    this.authService.userSub.subscribe((user) => {
      console.log(user)
      this.isAuthenticated = user?true:false
    });
  }

  onLogout(event: Event) {
    event.preventDefault();
    this.authService.logout();
  }
}
