import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/Servicios/firebase-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _router: Router, private _authService: FirebaseAuthService) { }
  email: string = '';
  password: string = '';
  updateMail(email: string) {
    this.email = email;
  }
  updatePassword(password: string) {
    this.password = password;
  }

  login() {
    this._authService.login(this.email, this.password)
    .then((response) => {this._router.navigate(['home'])})
    .catch(error => alert(error));
  }

  register(){
    this._authService.register(this.email, this.password)
    .then((response) => {alert('Usuario Registrado correctamente')})
    .catch(error => alert(error));
  }

}
