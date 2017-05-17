import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {
baseUrl: string = 'farhad.com:8080/';
movies: Movie[]
  constructor(private _http: Http) { }
  getMovies(){
    this._http.get(baseUrl + 'movies')
	  .map((res:Response)) => res.json())
	  .subscribe(
	    data => { this.movies = data }
		err => console.error(err)
		);
		}


}
