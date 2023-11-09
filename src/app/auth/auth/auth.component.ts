import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/services/auth.service';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { PlaceholderDirective } from 'src/app/shared/placeholder.directive';

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
  closeSub: Subscription;
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;


  constructor(private authService:AuthService , private router:Router , private componentFactoryResolver: ComponentFactoryResolver){

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
    this.error = null;

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
        this.router.navigate(['/']);
      },
      (errorMessage) => {
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      })
  }

  showErrorAlert(message : string){
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertModalComponent)
    this.alertHost.ViewContainerRef.clear();
    const componentRef = this.alertHost.ViewContainerRef.createComponent(componentFactory);
    componentRef.instance.error = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      this.alertHost.ViewContainerRef.clear();
 
    })
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
  

}
