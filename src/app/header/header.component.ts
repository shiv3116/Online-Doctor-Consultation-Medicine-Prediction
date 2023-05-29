import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  member: string;
  email: string;
  loginStatus: boolean;

  constructor(private loginService: LoginService) {
  }

  ngDoCheck(): void {
    this.member = this.loginService.getMember();
    this.email = this.loginService.getMemberEmail();
    this.loginStatus = this.loginService.getLoginStatus();
  }

  logout() {
    this.loginService.setLoginStatus();
    this.loginService.setMember('', '');
  }

}
