import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { MedicinePredictorComponent } from './medicine-predictor/medicine-predictor.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full' },
  { path: 'view-doctors', component: ViewDoctorsComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'doctor-login', component: DoctorLoginComponent },
  { path: 'doctor-register', component: DoctorRegisterComponent },
  { path: 'view-appointments', component: ViewAppointmentsComponent },
  { path: 'medicine-predictor-bot', component: MedicinePredictorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
