import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "../post/post.model";
import { map } from "rxjs";

@Injectable({providedIn:'root'})

export class PostService{
    posts : Post[];
  constructor(private http: HttpClient){
   
  }

 createPost(postData : Post){
    console.log(postData);
    return this.http.post<{ name: string }>('https://ng-new-database-715a8-default-rtdb.firebaseio.com/post.json', postData ,{
        headers : new HttpHeaders({
        'custom-headers' : 'posts-RSA'
        }),
        observe : 'response'
    });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('custom' , 'Hi');
    searchParams = searchParams.append('name' , 'RSA');
    return this.http
      .get<{ [key: string]: Post }>(
        `https://ng-new-database-715a8-default-rtdb.firebaseio.com/post.json` ,{
            headers : new HttpHeaders({
                'custom-headers' : 'posts-RSA'
                }),
            // params : new HttpParams().set('custom','name')
            params : searchParams
        }

      )
      .pipe(
        map((response) => {
          let posts: Post[] = [];
          for (let key in response) {
            posts.push({ ...response[key], key });
          }
          return posts;
        })
      );
  }


  clearPosts(){
    this.http.delete('https://ng-new-database-715a8-default-rtdb.firebaseio.com/post.json').subscribe(
        (response)=>{
            console.log(response);
        }
    )
  }
}