import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuardsService implements CanActivate{

    constructor(private authService : AuthService , private router: Router){}
    canActivate(
        route : ActivatedRouteSnapshot ,
        state : RouterStateSnapshot
    ) : boolean | Promise<boolean> | Observable<boolean>{
    //    let isLoggedIn=  this.authService.isAuthenticated();
    //    if(isLoggedIn){
    //     return true;
    //    }
    //    else{
    //     this.route.navigate(['/'])
    //     return false;
    //    }

    return this.authService.isAuthenticated().then((data)=>{
        if(data){
            return true;
        }
        else{
            this.router.navigate(['/']);
            return false;
        }
    })
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Promise<boolean> | Observable<boolean>{
        return this.canActivate(route,state)
    }
}