import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Post } from './post.model';
import { PostService } from '../services/post.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts : Post[];
  error: any;
  constructor(private http: HttpClient , private postService : PostService){

  }

  ngOnInit() {
    this.postForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required),
    });
    
    this.getPosts();
  
  }


  

  postForm: FormGroup;

  onCreatePost() {
    const postData: Post = this.postForm.value;
    this.postService.createPost(postData).subscribe((response) => {
      console.log(response);
      this.getPosts();
    });
  }

  getPosts() {
    this.postService.fetchPosts().subscribe(
      (response) => {
        this.posts = response;
      }, error =>{
        this.error = error.message;
      }
    );
  }

  onClearPosts(event : Event){
    event.preventDefault();
    this.postService.clearPosts();
    this.posts = [];
  }

 
  // getPosts(){
  //   this.http.get('https://ng-new-database-715a8-default-rtdb.firebaseio.com/post.json')
  //   .pipe(map((response)=>{
  //     let posts =[];
  //     for(let key in response){
  //     posts.push({...response[key], key});
  //     }
  //     return posts;
  //   }))
  //   .subscribe(response=>{
  //     console.log(response)
  //     this.posts = response;
  //   })
  // }
}
