import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorService } from './shared/doctor.service';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { MedicinePredictorComponent } from './medicine-predictor/medicine-predictor.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    ViewDoctorsComponent,
    UserLoginComponent,
    UserRegisterComponent,
    DoctorLoginComponent,
    DoctorRegisterComponent,
    ViewAppointmentsComponent,
    MedicinePredictorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
