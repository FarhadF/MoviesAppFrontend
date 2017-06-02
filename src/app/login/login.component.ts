import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService, private router: Router) { }
  errorHandler: boolean
  onSubmit(f) {
    console.log(JSON.stringify(f.value));
	this.authService.login(JSON.stringify(f.value))
	  .subscribe(
	    data => { if (data.token) {
		    localStorage.setItem('token', data.token);
			this.router.navigate(['/']);
		  } else if (data.error) {
		      console.log(data);
			  this.errorHandler=true
		  }
		  },

		error => console.log(error)
	);
	}


  ngOnInit() {
  }

}
