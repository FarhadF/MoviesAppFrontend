import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  providers: [MoviesService]
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  id: number;
  private sub: any;
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
	  this.id = +params['id'];
	console.log("id:" + this.id);
    this.moviesService.getMovie(this.id)
	  .subscribe(
	    movie => this.movie = movie,
		error => console.log("SubError in MovieComponent: ", error));
	});

  }
}
