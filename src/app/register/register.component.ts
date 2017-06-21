import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }


 errMessage: string
  onSubmit(f) {
    console.log(JSON.stringify(f.value));
    this.authService.register(JSON.stringify(f.value))
      .subscribe(
        data => {console.log(data);this.router.navigate(['login']);},
        error => {this.errMessage = JSON.parse(error._body).error; console.log(error);}
    );  
    } 

  ngOnInit() {
  }

}
