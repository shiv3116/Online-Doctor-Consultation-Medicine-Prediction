import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../shared/doctor.model';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent {
  name: string;
  password: string;
  email: string;
  reppassword: string;
  qualifications: string[] = [];
  expertiseIn: string;
  qual: string;
  photoUrl: string;
  shortBio: string;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.photoUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  onSubmit() {
    const exprtIn: string[] = [];
    let tmp: string = "";
    let flag: boolean = false;
    for (let ch of this.expertiseIn) {
      if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
        flag = true;
        tmp += ch;
      }
      else {
        if (flag)
          exprtIn.push(tmp);
        tmp = "";
        flag = false;
      }
    }
    exprtIn.push(tmp);
    this.doctorService.addDoctor(new Doctor(this.name, this.email, this.password, this.qualifications, exprtIn, [], this.photoUrl, this.shortBio));
    alert("Successfully Registered!!");
    this.router.navigate(["/doctor-login"]);
  }

  constructor(private doctorService: DoctorService, private router: Router) { }

  onChange(q: string) {
    console.log(q);
    let temp: string = "";
    for (let ch of q) {
      if (ch === ' ') {
        break;
      }
      temp += ch;
    }
    console.log(temp);
    this.qualifications.push(temp);
  }

  delete(q: string) {
    const ind = this.qualifications.indexOf(q, 0);
    if (ind > -1) {
      this.qualifications.splice(ind, 1);
    }
  }
}
