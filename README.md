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

15. Introduction to Routing Guards. Implementation of canActivate Route Guard in the angular.
16. Implement canActivateChild Route Guard for the Nested Child Routes in the Angular.
17. Controlling Navigation with CanDeactivate Route Guard in the angular
18. Implementing CanDeactivate Route Guard in the real-time scenario for the component - Angular.
19. Passing Static Data to the Route and also Access the static data in the typescript in angular.
20. Get Dynamic Data before entering into the component using the Resolve Guard in Angular

21. How to use Hash Urls as Fragments in the url for the internal pages in the angular routing

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes , {useHash:true})
  ],
  exports :[RouterModule]
})

22. Understand the core of the Observables in rxjs. Need of subscribe & unsubscribe in the angular.

  ngOnInit(){
    this.route.data.subscribe((data : Data)=>{
      console.log(data);
    })

    this.intervalSubscription=interval(1000).subscribe(count=>{
      console.log(count)
    })
  }

  ngOnDestroy(){
    this.intervalSubscription.unsubscribe();
  }

23. Create our own custom Observable in rxjs. How to use observer.next option in the angular.

24. Catch Errors & Complete in rxjs custom observable using observer.error and complete in angular.


25. Understand rxjs Operators in the observables before sending to the subscribe data in angular.

26. Apply multiple operators in the rxjs observables. Know more about the operators in rxjs angular.
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

27. Understand the Subjects in rxjs angular. Implement the Subject for cross-component communication
    (best method and need to unsubscribe it)

     // userAddedEvent = new EventEmitter<boolean>;
     userAddedEvent = new Subject<boolean>;
       userAddedSubscription : Subscription
  constructor(private authService : AuthService , private userService : UserService){

  }

  ngOnInit(){
    this.userAddedSubscription=this.userService.userAddedEvent.subscribe((data)=>{
      this.userAdded = data;
    })
  }

    ngOnDestroy(){
   this.userAddedSubscription.unsubscribe();
  }

TEMPLATE DRIVEN FORMS

1. Template Driven Forms in Angular. Get NgForm Object from the template to code in Angular.
     <form (ngSubmit)="onFormSubmit(formTemplate)" #formTemplate="ngForm">
                <div class="form-group">
                    <label for="userName">User Name</label>
                    <input type="text" class="form-control" id="userName" name="userName" ngModel>
                  </div>

                  <div class="form-group">
                    <label for="emailId">User Name</label>
                    <input type="email" class="form-control" id="emailId" name="emailId" ngModel>
                  </div>
               

                <div class="form-group">
                    <label for="gender">Gender</label>
                    <select class="form-control" id="gender" name="gender" ngModel>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>

                <div class="mt-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
2.  Advantages of using ViewChild in the Template Driven Form to get Form Object in angular.
3.  Explore the Form Object in the Template Driven Forms in the Angular.
4.  Validations for the Template Driven Forms. Show Validation Messages for the Form in Angular.
5.  Using ngModel for Two Way & One Way Binding to populate Data in Template Driven Forms - Angular
6.  NgModelGroup - Grouping The Form Controls in Template Driven Forms using ngModelGroup in angular
7.  Set Value and Patch Value for populating Form Elements in the Template Driven Forms in Angular.
8.  Get and Reset the Form Data controls in the Template Driven Forms in the Angular.


REACTIVE FORM

1. Introduction to Reactive Forms Approach. Create FormGroup and FormControl with code in Angular.

 this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isRestrictedNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.isRestrictedEmails]),
      }),

      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

Import ReactiveFormsModule

2. Attach the HTML File using the FormGroup with FormControlName using Reactive Forms in Angular.
   <form [formGroup]="signUpForm" (ngSubmit)='onSubmit()'>
   <input type="text" class="form-control" formControlName="username">

3. Apply Validations for Reactive Forms and also show messages in the HTML Template - Angular.
    
    *ngIf="!signUpForm.get('userData.username').valid && signUpForm.get('userData.username').touched">

      'username': new FormControl(null, [Validators.required, this.isRestrictedNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.isRestrictedEmails]),
4. Grouping the Controls in the Reactive Forms using FormGroupName in FormGroup - Angular.
       this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.isRestrictedNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], [this.isRestrictedEmails]),
      }),

      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });

     <div formGroupName="userData">
                    <div class="form-group">
                        <label>UserName</label>
                        <input type="text" class="form-control" formControlName="username">
                        <span class="help-block"
                            *ngIf="!signUpForm.get('userData.username').valid && signUpForm.get('userData.username').touched">
                            <span *ngIf="signUpForm.get('userData.username').errors">Username is
                                required</span>
                            <span *ngIf="signUpForm.get('userData.username').errors">Username is not
                                valid</span>
                        </span>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="text" class="form-control" formControlName="email">
                        <span class="help-block"
                            *ngIf="!signUpForm.get('userData.email').valid && signUpForm.get('userData.email').touched">Please
                            enter valid
                            Email</span>
                    </div>
                </div>

5. Dynamically Add Form Controls with FormArray FormArrayName in the Reactive Forms - Angular.
6. Create Custom Validations for the reactive Forms in the Angular.
7. Create a Custom Asynchronous Validator in the Reactive Forms - Angular
8. Explore StatusChanges, ValueChanges, SetValue, PatchValue, and reset in Reactive Forms - Angular


Pipes

1. Pipes in Angular. Chaining Multiple Pipes, parameterized Pipes in the Angular.
2. Create a custom Pipe and pass parameters to the Pipe in Angular using Transform method - Angular
3. Creating Filter Pipe in the Angular. Filter the list of data with search string in Angular.
4. Pure and Impure Pipes. Difference between the pure pipe and impure pipe in the Angular.
5. Understanding the async (Asynchronous) Pipe. How to use Async Pipe in the Angular.


HttpRequest

1. Introduction to Http Request. Make a Http Post Request Call through HttpClientModule - Angular.
2. Make Http Get Request and use RxJs Operators to transform the response in the Angular.
4. Define the Types of HttpClient Request Data using the interface and Generic Type in the Angular.
5. Using Services for Http request with HttpClient. Communicate Services and Components in Angular.
6. Implement HTTP Delete Request with HttpClient in Angular.
7. Error Handling in the Http Request Calls with HTTPClient
8. Sending HTTP Headers in the API Request Call with HTTPClient in the angular.
9. Adding Query Params for the Url using HttpParams Object in HttpClient
10. Observe different types of response in HttpClient and Changing the Response Body Type
11. Introducing HTTP Interceptors using HTTP_INTERCEPTORS in Angular.
12. Manipulating Request Objects, headers with Interceptors in the Angular.
13. Accessing Http Response Event Object with Response Interceptors in the Angular.
14. Adding Multiple Interceptors for the HTTP Request. Interceptors executing order in Angular.


Authentication

1. Authentication - Design the auth (Login) page in the angular
2. Apply Template Driven Approach and implement Validations for the authentication form - Angular
3. Authentication - Perform Signup Request and get the token & expiresIn as Response - Angular
4. Authentication - Improve Error Messages with CatchError and throwError rxjs operators - Angular
5. Authentication - Send the login request and use Observable for the HTTP in the angular.
6. Authentication - Create and Store the User Token Data in the angular
7. Authentication - Send Auth Token to the outgoing HTTP Requests with behavior Subject - Angular.
8. Authentication - Add the auth token as parameter using Interceptors - Angular
9. Authentication - Adding the Logout Functionality by removing the auth token in Angular
10. Authentication - Saving Token in LocalStorage for the autologin feature - Angular
11. Authentication - Auto-Logout the user when the token expired - Angular.
12. Create Component Dynamically using ComponentFactoryResolver and ViewContainerRef in Angular.
13. Access the Component properties and methods with ComponentRef instance in Angular.

Modules

1. Adding Routes to the Feature Module. forChild, forRoot differences in Router Module - Angular
2. Understand Core Module. Move all services, Interceptors from appModule to CoreModule - Angular
3. Implement Lazy Loading for Modules in the Angular to increase the performance of the project.