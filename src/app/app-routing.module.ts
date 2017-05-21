import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NewMovieComponent } from './new-movie/new-movie.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  { 
    path: 'movie/:id',
    component: MovieDetailsComponent,
	pathMatch: 'full'
  },
  {
    path: 'movie/new',
	component: NewMovieComponent,
	pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
