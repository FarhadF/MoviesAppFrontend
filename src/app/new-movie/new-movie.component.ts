import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss'],
  providers: [MoviesService]
})
export class NewMovieComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }
  movie: Movie;
  ngOnInit() {
  }
  onSubmit(f) {
      
      console.log(f.value);
	  console.log(JSON.stringify(f.value));
      this.moviesService.newMovie(JSON.stringify(f.value))
	    .subscribe(
		  movie => this.movie = movie,
		  error => console.log("error in new movie component")
		  );
  }
}
