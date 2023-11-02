import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subscription, filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  intervalSubscription : Subscription;
  routerSubscription : Subscription;
  constructor(private route : ActivatedRoute){
    
  }

  ngOnInit(){
    this.routerSubscription=this.route.data.subscribe((data : Data)=>{
      console.log(data);
    })

    // this.intervalSubscription=interval(1000).subscribe(count=>{
    //   console.log(count)
    // })

    let customObservable = Observable.create(observer=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        // if(count>3){
        //   observer.console.error("Not allowed greater than 3");
        // }
        if(count>2){
          observer.complete();
        }
        count++;
      },1000)
    })

    this.intervalSubscription = customObservable.pipe(filter((data:number)=>{
      if(data>0)
      return true;
      else
      return false;

    }),map((data:number)=>{return 'count is ' + data+1})).subscribe(data=>{
      console.log(data);
    },error =>{
      console.log(error)
    },
    ()=>{
      console.log('complete')
    })
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
    this.routerSubscription.unsubscribe();
  }
}
