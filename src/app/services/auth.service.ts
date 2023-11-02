export class AuthService{
    isLoggedIn =false;

    logIn(){
        this.isLoggedIn = true;
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