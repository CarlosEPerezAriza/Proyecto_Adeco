import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  updateMail(email: string){
    this.email = email;
  }
  updatePassword(password: string){
    this.password = password;
  }
  login(){
    alert(this.email + this.password)
  }

}
