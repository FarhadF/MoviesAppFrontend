import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
  providers: [MoviesService]
})
export class EditMovieComponent implements OnInit {
  movie: Movie;
  id: number;
  private sub: any
  constructor(private moviesService: MoviesService, private route: ActivatedRoute) { }
  onSubmit(f) {
    console.log(JSON.stringify(f.value));
	this.sub = this.route.params.subscribe( params => {
	  this.id = +params['id'];
	  console.log("id: ", this.id);
      this.moviesService.editMovie(JSON.stringify(f.value), this.id)
	  .subscribe(
	    movie =>  this.movie = movie
		);
	});
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.id = +params['id']; });
      this.moviesService.getMovie(this.id)
	  .subscribe(
	    movie => this.movie = movie);
	console.log(this.movie)
  }

}
