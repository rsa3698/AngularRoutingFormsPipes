import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

  constructor(private http: HttpClient){

  }
  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
    this.getPosts();
  }

  postForm: FormGroup;

  onCreatePost(){
    console.log(this.postForm.value);
    const PostData = this.postForm.value;
    this.http.post('https://ng-new-database-715a8-default-rtdb.firebaseio.com/post.json',PostData).subscribe(response=>{
      console.log(response);
    })
  }

  getPosts(){
    this.http.get('https://ng-new-database-715a8-default-rtdb.firebaseio.com/post.json').subscribe(response=>{
      console.log(response)
    })
  }
}
