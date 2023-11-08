import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Sending Request Interceptor');
        let modifiedRequest = req.clone({
            // headers: req.headers.append('auth','abc'),
            // params: req.params.append('hi','hello')
        })
        return next.handle(modifiedRequest).pipe(
            tap((event)=>{
                console.log(event);
            })
        )
    }
    
}