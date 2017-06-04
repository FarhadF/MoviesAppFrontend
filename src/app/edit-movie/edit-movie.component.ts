import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/Rx';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
  providers: [MoviesService]
})
export class EditMovieComponent implements OnInit {
  movie: Movie;
  requiredFields: boolean 
  id: number;
  private sub: any
  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }
  onSubmit(f) {
    console.log(JSON.stringify(f.value));
    this.moviesService.editMovie(JSON.stringify(f.value), this.id)
	  //.finally(() => this.router.navigate(['movies']))
      .subscribe(
	    movie => { this.movie = movie; this.router.navigate(['movies']);},
		error => { console.log("onSubmit-EditMovie",error);
		           if (error === "No JWT present or has expired") {
				     this.router.navigate(['/login']);
					 }
				   if (error.includes("fill the required fields")) {
				     this.requiredFields = true;
					 }
				 }
	  );
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.id = +params['id']; });
      this.moviesService.getMovie(this.id)
	  .subscribe(
	    (movie) => { this.movie = movie; });
  }

}

