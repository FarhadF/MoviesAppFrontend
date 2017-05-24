import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.scss'],
  providers: [MoviesService]
})
export class DeleteMovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private moviesService: MoviesService) {}
  private id: number;
  private sub: any;
  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
	  this.id = +params['id'];}
	);
	this.moviesService.deleteMovie(this.id).subscribe(
	  data => this.router.navigate(['movies'])
	  );
  }

}
