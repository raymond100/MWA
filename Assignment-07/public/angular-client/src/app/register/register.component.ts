import { Component, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { GamesService } from '../games.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // @ViewChild('formRegister')
  // formRegister!: NgForm;
  constructor(private gamesService: GamesService, private router: Router) {}

  model = new User();

  ngOnInit(): void {}

  submitted = false;

  userRegister() {
    if (this.isMatchPassword()) {
      this.gamesService
        .addUser(this.model)
        .then(() => {
          this.router.navigate(['games']);
        })
        .catch((error) => {
          console.log(error);
        });
      this.submitted = true;
    } else {
      console.log('Not match');
    }
  }

  isMatchPassword() {
    return this.model.password === this.model.repass;
  }
}

export class User {
  username!: string;
  email!: string;
  password!: string;
  repass!: string;
}
