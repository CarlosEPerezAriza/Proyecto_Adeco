import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { CuentasPesonalizacionComponent } from './cuentas-pesonalizacion/cuentas-pesonalizacion.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
/*const routes: Routes = [


  { path:'' , component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cuentas-pesonalizacion', component: CuentasPesonalizacionComponent}

];*/
const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'cuentas-personalizacion', component: CuentasPesonalizacionComponent}
       ],
      component: HeaderFooterComponent
    },
    { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
