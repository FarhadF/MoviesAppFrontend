import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MoviesService]
})

export class MoviesComponent implements OnInit {
  movies: Movie[];
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies()
	  .subscribe(
	    movies => this.movies = movies,
	    error => console.log("error in init movies component"));

  }
  
}
