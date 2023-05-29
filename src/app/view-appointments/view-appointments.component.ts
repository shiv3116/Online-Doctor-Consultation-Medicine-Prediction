import { Component, DoCheck } from '@angular/core';
import { Appointment } from '../shared/appointment.model';
import { DoctorService } from '../shared/doctor.service';
import { LoginService } from '../shared/login.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.css']
})
export class ViewAppointmentsComponent implements DoCheck {
  appointments: Appointment[];
  userEmail: string;
  member: string;

  constructor(private userService: UserService, private loginService: LoginService, private doctorService: DoctorService) { }

  ngDoCheck(): void {
    this.userEmail = this.loginService.getMemberEmail();
    this.member = this.loginService.getMember();
    if (this.member === 'User') {
      this.appointments = this.userService.getAppointments(this.userEmail);
    }
    else if (this.member === 'Doctor') {
      this.appointments = this.doctorService.getAppointments(this.userEmail);
    }
  }

}
