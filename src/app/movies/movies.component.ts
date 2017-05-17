import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[]
  constructor(private _http: Http) { }

  ngOnInit() {
    this.getMovies();
  }
  
  getMovies() {
    this._http.get('http://farhad.com:8080/movies')
	  .map((res: Response) => res.json())
	  .subscribe(
	    data => { this.movies = data },
		err => console.error(err),
		() => console.log(this.movies)
	  );
  }
}
