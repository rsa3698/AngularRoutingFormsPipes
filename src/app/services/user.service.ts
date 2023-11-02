import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class UserService{

    // userAddedEvent = new EventEmitter<boolean>;
     userAddedEvent = new Subject<boolean>;
    
    getUser(id: string){
    if(id === '1'){
        return {
            id: '1',
            name: 'First'
        }
    }
    else{
        return {
            id: '4',
            name: 'UpdatedFirst'
        }
    }
    }

    addUser(){
        this.userAddedEvent.next(true);
    }
}