import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap, throwError } from "rxjs";
import { User } from "../auth/auth/auth.model";
import {  Router } from "@angular/router";
export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}
@Injectable({providedIn : 'root'})
export class AuthService{
    isLoggedIn =false;
    userSub = new BehaviorSubject<User>(null);
    clearTimeout: any;

    constructor(private http : HttpClient , private router:Router){

    }

    signUp(email: string , password : string){
     return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZPUb52GHNfZokvPohAhR_H1389L-0_LA', {email , password , returnSecureToken:true})
    //  .pipe(catchError((errorRes) =>{
    //   let errorMessage = 'An Error Occured';

    //   if(!errorRes.error || !errorRes.error.error){
    //     return throwError(errorMessage);
    //   }
    //     switch(errorRes.error.error.message){
    //       case 'EMAIL_EXISTS' :
    //         errorMessage = 'Email already exists'
    //     }
    //     return throwError(errorMessage);
    //  }))
    .pipe(catchError(this.getErrorHandler) ,tap(this.handleUser.bind(this)));
    }

    login(email: string, password: string) {
      return this.http
        .post<AuthResponseData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZPUb52GHNfZokvPohAhR_H1389L-0_LA
      `,
          { email, password, returnSecureToken: true }
        ).pipe(catchError(this.getErrorHandler), tap(this.handleUser.bind(this)))
    }

    getErrorHandler(errorRes: HttpErrorResponse) {
      let errorMessage = 'An Error Occurred';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMessage = 'Email Already Exists';
          break;
        case 'EMAIL_NOT_FOUND':
          errorMessage = 'Email Not Found';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          errorMessage = 'Invalid Password';
          break;
      }
      return throwError(errorMessage);
    }
  
    autoLogin() {
      let userData: {
        email: string;
        _token: string;
        expirationDate: string;
        localId: string;
      } = JSON.parse(localStorage.getItem('userData'));
      if (!userData) {
        return;
      }
  
      let user = new User(
        userData.email,
        userData.localId,
        userData._token,
        new Date(userData.expirationDate)
      );
  
      if (user.token) {
        this.userSub.next(user);
      }
  
      // let date = new Date().getTime();
      // let expirationDate = new Date(userData.expirationDate).getTime();
  
      // this.autoLogout(expirationDate - date);
    }

    private handleUser(response: AuthResponseData) {
      const expireDate = new Date(
        new Date().getTime() + +response.expiresIn * 1000
      );
      const user = new User(
        response.email,
        response.localId,
        response.idToken,
        expireDate
      );
      this.userSub.next(user);
      localStorage.setItem('userData', JSON.stringify(user));
   
    }

    autoLogout(expirationDate: number) {
      console.log(expirationDate);
      this.clearTimeout = setTimeout(() => {
        this.logout();
      }, expirationDate);
    }
  
    logout() {
      this.userSub.next(null);
      this.router.navigate(['/auth']);
      localStorage.removeItem('userData');
      if (this.clearTimeout) {
        clearTimeout(this.clearTimeout);
      }
    }

    isAuthenticated(){
        //return this.isLoggedIn;

        return new Promise((resolve , reject) =>{
          setTimeout(()=>{
            resolve(this.isLoggedIn);
          },3000)
        })
    }
}