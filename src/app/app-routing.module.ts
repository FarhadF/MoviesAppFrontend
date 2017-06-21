import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    path: 'movie',
    children: [
	  { 
	    path: 'new',
		component: NewMovieComponent,
		pathMatch: 'full'
	  },
	  {
	    path: ':id',
		children: [
		  {
		    path: '',
			component: MovieDetailsComponent,
   		    pathMatch: 'full'
	      },
	      { 
		    path: 'edit',
	        component: EditMovieComponent,
		    pathMatch: 'full'
	      },
		  {
		    path: 'delete',
			component: DeleteMovieComponent,
			pathMatch: 'full'
		  }
		]
	  }
	]
  },
  {
    path: 'movie/new',
	component: NewMovieComponent,
	pathMatch: 'full'
  },
  {
    path: 'login',
	component: LoginComponent,
	pathMatch: 'full'
  },
  {
    path: 'register',
	component: RegisterComponent,
	pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
