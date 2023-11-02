import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router'
import { Observable } from 'rxjs'

export interface IDeactiveateGuard{

    canExit:()=> boolean | Promise<boolean> | Observable<boolean>;
}

export class DeactivateGuardService implements CanDeactivate<IDeactiveateGuard>{

    canDeactivate(
        component: IDeactiveateGuard,
        route: ActivatedRouteSnapshot,
        currentState : RouterStateSnapshot,
        nextState: RouterStateSnapshot
    ):boolean | Promise<boolean> | Observable<boolean>{
        return component.canExit()
    }
}