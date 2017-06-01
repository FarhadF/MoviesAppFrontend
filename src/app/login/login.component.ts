import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  
  constructor(private authService: AuthService) { }

  onSubmit(f) {
    console.log(JSON.stringify(f.value));
	this.authService.login(JSON.stringify(f.value))
	  .subscribe(
	    data => { if (data.token) {
		    localStorage.setItem('token', data.token);
		  } else if (data.error) {
		      console.log(data);
		  }
		  },

		error => console.log(error)
	);
	}


  ngOnInit() {
  }

}
