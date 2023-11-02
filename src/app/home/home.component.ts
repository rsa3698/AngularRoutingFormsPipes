import { Component } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private route : ActivatedRoute){
    this.route.data.subscribe((data : Data)=>{
      console.log(data);
    })
  }
}
