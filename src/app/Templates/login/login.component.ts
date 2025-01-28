import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _router: Router) {}
  email: string = '';
  password: string = '';
  updateMail(email: string) {
    this.email = email;
  }
  updatePassword(password: string) {
    this.password = password;
  }
  login() {
    alert(this.email + this.password);
    this._router.navigate(['home'])
  }
}
