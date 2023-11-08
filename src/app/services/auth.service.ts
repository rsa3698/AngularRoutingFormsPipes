import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";
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

    constructor(private http : HttpClient){

    }

    signUp(email: string , password : string){
     return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDZPUb52GHNfZokvPohAhR_H1389L-0_LA', {email , password , returnSecureToken:true})
     .pipe(catchError((errorRes) =>{
      let errorMessage = 'An Error Occured';

      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }
        switch(errorRes.error.error.message){
          case 'EMAIL_EXISTS' :
            errorMessage = 'Email already exists'
        }
        return throwError(errorMessage);
     }))
    }

    login(email: string, password: string) {
      return this.http
        .post<AuthResponseData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDZPUb52GHNfZokvPohAhR_H1389L-0_LA
      `,
          { email, password, returnSecureToken: true }
        )
    }

    


  

    logOut(){
        this.isLoggedIn = false;
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