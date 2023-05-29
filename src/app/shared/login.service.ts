import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedInMember: string;
  private loggedInMemberEmail: string;
  private loginStatus: boolean = false;
  constructor() { }

  setMember(member: string, email: string) {
    this.loggedInMember = member;
    this.loggedInMemberEmail = email;
  }

  setLoginStatus() {
    this.loginStatus = !this.loginStatus;
  }

  getMember() {
    return this.loggedInMember;
  }

  getMemberEmail() {
    return this.loggedInMemberEmail;
  }

  getLoginStatus() {
    return this.loginStatus;
  }

}
