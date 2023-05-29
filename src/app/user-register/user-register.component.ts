import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  name: string;
  email: string;
  password: string;
  reppassword: string;

  constructor(private userService: UserService, private router: Router) { }

  onSubmit() {
    const tuser = this.userService.getUsers();
    for (let user of tuser) {
      if (user.getEmail() == this.email) {
        alert("User already Registered!!");
        return;
      }
    }
    this.userService.addUser(new User(this.name, this.email, this.password, []));
    alert("Successfully Registered!");
    this.router.navigate(['/user-login']);
  }
}
