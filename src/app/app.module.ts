import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NewMovieComponent } from './new-movie/new-movie.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
	MovieDetailsComponent,
	NewMovieComponent,
	EditMovieComponent,
	DeleteMovieComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
