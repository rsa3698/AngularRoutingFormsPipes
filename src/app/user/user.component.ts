import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

   user : { id: number ; name:string};
  constructor(private route: ActivatedRoute , private router: Router){
    
  }

  ngOnInit(){
    // this.user ={
    //   id : this.route.snapshot.params['id'],
    //   name : this.route.snapshot.params['name']
    // };

    this.route.params.subscribe((data)=>{
      this.user= {
        id: data['id'],
        name: data['name']
      }
    })
    
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
    })

    this.route.fragment.subscribe((data)=>{
      console.log(data);
    })
  }


  getRouterDetails(){
    this.router.navigate(['/users',2,'Rama'], {
      queryParams: { page:3 , search:'RSA'},
      fragment: 'current'

    })
  }

  onUserEdit(){
    this.router.navigate(['/users', this.user.id , this.user.name, 'edit'] , {
      queryParamsHandling : 'preserve'
    })
  }


}
