import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: ['MoviesService']
})
export class MoviesComponent implements OnInit {
  movies: Movie[]
  constructor(private _http: Http, private _moviesService: MoviesService) { }

  ngOnInit() {
    movies = this._moviesService.getMovies();
  }
  
 







  
}
