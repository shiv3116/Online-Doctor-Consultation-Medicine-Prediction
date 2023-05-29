import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from '../shared/doctor.model';
import { DoctorService } from '../shared/doctor.service';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {
  @ViewChild('loginDetails') myForm: FormGroup;
  email: string;
  password: string;
  validDoctor: boolean = false;

  constructor(private doctorService: DoctorService, private router: Router, private loginService: LoginService) { }

  login() {
    const doctors: Doctor[] = this.doctorService.getDoctors();
    for (let doctor of doctors) {
      if (doctor.getEmail() === this.email && doctor.getPassword() === this.password) {
        this.validDoctor = true;
        this.loginService.setMember("Doctor", this.email);
        this.loginService.setLoginStatus();
        this.router.navigate(['/']);
      }
    }
    if (!this.validDoctor) {
      alert("No Such User Found!!");
      this.myForm.reset();
    }
  }
}
