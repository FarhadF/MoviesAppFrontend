import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss'],
  providers: [MoviesService]
})
export class NewMovieComponent implements OnInit {

  constructor(private moviesService: MoviesService, private router: Router) { }
  movie: Movie;
  requiredFields: boolean
  ngOnInit() {
  }
  onSubmit(f) {
      
      console.log(f.value);
	  console.log(JSON.stringify(f.value));
      this.moviesService.newMovie(JSON.stringify(f.value))
	    .subscribe(
		  movie => {this.movie = movie; this.router.navigate(['/movies']);} ,
		  error => { 
		             console.log("error in new movie component",error);
		             if (error === "No JWT present or has expired") {
					   this.router.navigate(['/login']);
					 }
					 if (error.includes("fill the required fields")) {
					   this.requiredFields = true;
					 }
				   }
		  );
  }
}
