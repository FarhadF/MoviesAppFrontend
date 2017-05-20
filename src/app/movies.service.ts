import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
baseUrl: string = 'http://127.0.0.1:8080/';
  constructor(private _http: Http) { }
  getMovies(){
    return this._http.get(this.baseUrl + 'movies')
	  .map((res:Response) => <Movie[]>res.json());
	  
		}


}
