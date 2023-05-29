import { Component } from '@angular/core';
import { Doctor } from '../shared/doctor.model';
import { DoctorService } from '../shared/doctor.service';

@Component({
  selector: 'app-view-doctors',
  templateUrl: './view-doctors.component.html',
  styleUrls: ['./view-doctors.component.css']
})
export class ViewDoctorsComponent {
  searchKey1: string;
  searchKey2: string;
  doctors: Doctor[] = this.doctorService.getDoctors();

  constructor(private doctorService: DoctorService) { }

  searchByName() {
    this.doctors = this.doctorService.getDoctors().filter((s)=> {
      let doctorName = s.getName().toLowerCase();
      return doctorName.includes(this.searchKey1.toLowerCase());
    });
  }

  searchByIllness() {
    this.doctors = this.doctorService.getDoctors().filter((s) => {
      let exprtIn = s.getExpertiseIn();
      let rval = false;
      for(let exp of exprtIn) {
        rval =  exp.toLowerCase().includes(this.searchKey2.toLowerCase());
        if(rval == true) {
          break;
        }
      }
      return rval;
    });
  }
}
