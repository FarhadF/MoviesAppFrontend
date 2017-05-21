import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Movie } from './movie';

@Injectable()
export class MoviesService {
baseUrl: string = 'http://127.0.0.1:8080/';
  constructor(private http: Http) { }
  getMovies(){
    return this.http.get(this.baseUrl + 'movies')
	  .map((res:Response) => <Movie[]>res.json())
	  .catch(this.handleError);
		}
  getMovie(id: number): Observable<Movie> {
    console.log("moviesService: ", id);
	return this.http.get(this.baseUrl + `movie/${id}`)
	  .map((res:Response) => <Movie>res.json())
	  .catch(this.handleError);
	//    console.log("status: ", res.status);
}
  private handleError (error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
	  }
    console.error('handle: ', errMsg);
    return Observable.throw(errMsg);
  }
}
