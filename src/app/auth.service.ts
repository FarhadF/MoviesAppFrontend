import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  baseUrl: string = 'http://127.0.0.1:8080/';
  
 

  constructor(private http: Http, private router: Router) { }

  login(body: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' }); 
    let options = new RequestOptions({ headers: headers }); 
	console.log(body);
    return this.http.post(this.baseUrl + 'login', body, options)
	  .map((res: Response) => res.json());
    
  }
  logout() {
    localStorage.removeItem('token');
	//this.setLoggedin(false);
	this.router.navigate(['/']);
  }
  
  get authenticated() {
   
    return tokenNotExpired('token');
  }

}
