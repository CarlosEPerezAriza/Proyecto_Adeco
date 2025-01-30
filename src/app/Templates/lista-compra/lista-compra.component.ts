import { Router } from '@angular/router';
import { ListaCompraService } from 'src/app/Servicios/lista-compra.service';
import { ListaCompra } from './../../models/listaCompra.model';
import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/Servicios/firebase-auth.service';

@Component({
  selector: 'app-lista-compra',
  templateUrl: './lista-compra.component.html',
  styleUrls: ['./lista-compra.component.css']
})
export class ListaCompraComponent {
  listaCompra: ListaCompra = {id: '0', content: [], owner: ''};
  nameInput: string = ''
  imageInput:string = ''
  constructor(private service: ListaCompraService, private auth: FirebaseAuthService, private router:Router) {
    this.listaCompra.owner = this.auth.getUser()!.uid
    this.service
      .getLists()
      .subscribe((compras) =>
        compras.filter((list) => list.owner == this.listaCompra.owner).length !=
        0
          ? (this.listaCompra = compras.filter(
              (list) => list.owner == this.listaCompra.owner
            )[0])
          : service
              .addList(this.listaCompra)
              .then(
                () =>
                  (this.listaCompra = compras.filter(
                    (list) => list.owner == this.listaCompra.owner
                  )[0])
              )
      );
  }
  addItem(){
    this.listaCompra.content.push({name: this.nameInput, image:this.imageInput, bought:false})
  }
  removeItem(index: number){
    this.listaCompra.content.splice(index, 1)
  }
  updateList(){
    this.service.updateList(this.listaCompra.id,this.listaCompra)
    this.router.navigateByUrl('home');
  }
}
