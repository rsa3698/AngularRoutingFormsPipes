1. Introduction to Angular Routing. Set up and load routes with RouterModule in angular.
 <li class="nav-item"><a href="/users">Users</a></li> - In this case we have page loads every single time which is not SPA behaviour

2. Navigating Links in the Page using RouterLink in the angular.
  <li class="nav-item"><a routerLink="/">Home</a></li>

3. We can use routerLink as property binding also  mostly for dynamic Purpose
  <li class="nav-item"><a [routerLink]="['/users']">Users</a></li>

4. Styling the Active Router Link using routerLinkActive and routerLinkActiveOptions in angular.
 <li class="nav-item"><a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Home</a></li>
 This routerLinkActiveOptions is to resolve parent child routing issues for exact path matching

5. Navigate between pages using router programmatically in Typescript code in angular.
 onCategoriesClick(){
    this.router.navigateByUrl('/categories'); - Way 1
    this.router.navigate(['categories']); - Way 2
  }

6. Passing and Fetching Parameters to Routes using ActivatedRoute snapshot in Angular. 
Use ActivatedRoute instead of Router for getting status of active route.

In app Module :
{ path: 'users/:id/:name' , component : UserComponent},
user : { id: number ; name:string};
  constructor(private route: ActivatedRoute){
    
  }

  ngOnInit(){
    this.user ={
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    };

7. Fetch Route Parameters Reactively using Params Subscribe with ActivatedRoute in angular.
 this.route.params.subscribe((data)=>{
      this.user= {
        id: data['id'],
        name: data['name']
      }
    })

8. Passing Query Parameters and Fragments to the Url Route with the Template and Program in Angular

Template:
<div>
    <a [routerLink]="['/users',1 ,'Aditi']" [queryParams]="{page:1 ,search:'raudra'}">Get Details of Me</a>
</div>

Program :

<div>
    <button (click)="getRouterDetails()">Click Me Again!</button>
</div>

  getRouterDetails(){
    this.router.navigate(['/users',2,'Rama'], {
      queryParams: { page:3 , search:'RSA'},
      fragment: 'current'

    })
  }

10. Retrieving Query Parameters and Fragments from the URL through Typescript Code in the angular?

    
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    Best Way:
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
    })

    this.route.fragment.subscribe((data)=>{
      console.log(data);
    })

11. Setting up the child or Nested Routes using the children key in routing module in the Angular. 
    DO:
    { path: 'users' ,
    component : UsersComponent,
    children : [{path: ':id/:name' , component:UserComponent}]},

    DON'T
    // { path: 'users/:id/:name' , component : UserComponent},

12. Preserve or merge the query parameters by forwarding with queryparamsHandling in Angular.

     onUserEdit(){
    this.router.navigate(['/users', this.user.id , this.user.name, 'edit'] , {
      queryParamsHandling : 'preserve'
    })
  }

13.  Implement Custom 404 Page adding wildcard Route, redirectTo option in the angular routing module.
   
   { path: 'not-found' , component : PageNotFoundComponent},
   { path: '**' , redirectTo: 'not-found'}
   
14. Separate all the Routing configuration code into another file app-routing.module in the angular.

   Check this file app-routing.module.ts