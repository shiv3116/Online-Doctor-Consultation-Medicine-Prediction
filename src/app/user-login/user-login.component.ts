import { Component, ViewChild } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  @ViewChild('loginDetails') myForm: FormGroup;
  email: string;
  password: string;
  validUser: boolean = false;

  constructor(private userService: UserService, private router: Router, private loginService: LoginService) { }

  login() {
    const users: User[] = this.userService.getUsers();
    for (let user of users) {
      if (user.getEmail() === this.email && user.getPassword() === this.password) {
        this.validUser = true;
        this.loginService.setMember("User", this.email);
        this.loginService.setLoginStatus();
        this.router.navigate(["/"]);
      }
    }
    if (!this.validUser) {
      alert("No such user found!!");
      this.myForm.reset();
    }
  }
}
