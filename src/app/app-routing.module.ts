import { CrearRecetaComponent } from './Templates/crear-receta/crear-receta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Templates/home/home.component';
import { AboutComponent } from './Templates/about/about.component';
import { LoginComponent } from './Templates/login/login.component';
import { CuentasPesonalizacionComponent } from './Templates/cuentas-pesonalizacion/cuentas-pesonalizacion.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { CreadorPasosComponent } from './Templates/creador-pasos/creador-pasos.component';
import { ListaCompraComponent } from './Templates/lista-compra/lista-compra.component';
import { VisorRecetasComponent } from './Templates/visor-recetas/visor-recetas.component';
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
        { path: '', redirectTo: '/login', pathMatch: 'full'},
        { path: 'home', component: HomeComponent },
        { path: 'about', component: AboutComponent },
        { path: 'cuentas-personalizacion', component: CuentasPesonalizacionComponent},
        { path: 'crearreceta', component: CrearRecetaComponent },
        { path: 'crearreceta/:id', component: CrearRecetaComponent},
        { path: 'verreceta/:id', component: VisorRecetasComponent},
        { path: 'crearPaso', component: CreadorPasosComponent },
        { path: 'listacompra', component: ListaCompraComponent}
       ],
      component: HeaderFooterComponent,
    },
    { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
