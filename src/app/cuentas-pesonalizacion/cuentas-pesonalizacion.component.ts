import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cuentas-pesonalizacion',
  templateUrl: './cuentas-pesonalizacion.component.html',
  styleUrls: ['./cuentas-pesonalizacion.component.css'],
})
export class CuentasPesonalizacionComponent {
  constructor(private _router: Router) {}
  imageSelector = dataSelector.image;
  usernameSelector = dataSelector.username;
  passwordSelector = dataSelector.password;
  popupVisible = false;
  popupTitle: string = '';
  selector: dataSelector = dataSelector.username;
  username: string = '';
  image: string = '';
  password: string = '';
  selectData(selector: dataSelector) {
    this.selector = selector;
    switch (this.selector) {
      case dataSelector.username:
        this.popupTitle = 'Cambia tu username';
        break;
      case dataSelector.image:
        this.popupTitle = 'Cambia tu imagen (url)';
        break;
      case dataSelector.password:
        this.popupTitle = 'Cambia tu contraseña';
        break;
    }
    this.popupVisible = true;
  }
  updateData(value: string) {
    switch (this.selector) {
      case dataSelector.username:
        this.username = value;
        break;
      case dataSelector.image:
        this.image = value;
        break;
      case dataSelector.password:
        this.password = value;
        break;
    }
    this.popupVisible = false;
  }
  logout() {
    this._router.navigate(['/login']);
  }
}
enum dataSelector {
  username,
  image,
  password,
}
