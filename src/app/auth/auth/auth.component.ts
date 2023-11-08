import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  isLoginMode = true;
  isLoading = false;
  error: string = null;
  password : string;

  constructor(private authService:AuthService){

  }
  

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
   
  onSubmitForm(authForm : NgForm){
    if(!authForm.valid){
      return;
    }

    let authObs: Observable<AuthResponseData>;
    this.isLoading = true;

    if(this.isLoginMode){
      authObs=this.authService.login(authForm.value.email,authForm.value.password)
    }
    else{
       authObs=this.authService.signUp(authForm.value.email,authForm.value.password)
    }

    authObs.subscribe(
      (response) => {
        console.log(response);
        this.isLoading = false;
        // this.router.navigate(['/']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        // this.showErrorAlert(errorMessage);
        this.isLoading = false;
      })
  }
  

}
