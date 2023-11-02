import { Component, OnInit } from '@angular/core';
import { IDeactiveateGuard } from '../services/guards/deactivate-guard.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit , IDeactiveateGuard{

  user : {id: string , name: string}
  editUserDetails : {id: string , name: string}
  constructor(private route: ActivatedRoute){

  }
  
  ngOnInit(){

    this.route.data.subscribe((data)=>{
      console.log(data);
      this.user ={
        id: data['id'],
        name: data['name']
      }
      this.editUserDetails = {...this.user}
    })
    // this.route.params.subscribe((data:Params)=>{
    //   this.user ={
    //     id: data['id'],
    //     name: data['name']
    //   }

    //   this.editUserDetails = {...this.user}
    // })
  }

  canExit(){
    console.log(this.editUserDetails);
    console.log(this.user)

    if(this.user.id !== this.editUserDetails.id || this.user.name !== this.editUserDetails.name)
    {
      if(confirm('Are you sure you want to exit?'))
      {
        return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
}
