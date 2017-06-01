import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Movie } from './movie';
import { Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class MoviesService {
baseUrl: string = 'http://127.0.0.1:8080/';
  constructor(private http: Http, private authHttp: AuthHttp) { }
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
  }
	//    console.log("status: ", res.status);
  newMovie(body: string): Observable<Movie> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("NewMovie: ", body);
	return this.authHttp.post(this.baseUrl + "movie", body, options)
	  				.map((res:Response) => res.json())
					.catch(this.handleError);
  }
  editMovie(body: string, id: number): Observable<Movie> {
    console.log("editMovieService: ", id);
	let headers = new Headers({ 'Content-Type': 'application/json' });
	let options = new RequestOptions({ headers: headers });
	return this.authHttp.post(this.baseUrl + "movie/" + id + "/edit", body, options)
	                .map((res:Response) => res.json())
					.catch(this.handleError);
  }

  deleteMovie(id: number): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
	return this.authHttp.delete(this.baseUrl +"movie/" + id, options)
	  .map((res:Response) => res.json())
	  .catch(this.handleError);
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
