import { ListaCompra } from './../models/listaCompra.model';
import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc, FirestoreDataConverter, query } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';  // Importamos 'map' desde rxjs/operators
const ListaCompraConverter: FirestoreDataConverter<ListaCompra> = {
  toFirestore(lista: ListaCompra) {
    return {
        content: lista.content,
        owner: lista.owner,
    };
  },
  fromFirestore(snapshot: any): ListaCompra {
    const data = snapshot.data();
    console.log(snapshot)
    return {
      id: snapshot.id,
      content: data.content,
      owner: data.owner,
    };
  }
};

@Injectable({
  providedIn: 'root'
})
export class ListaCompraService {
  private collectionName = 'listaCompras';  // Nombre de la colección en Firestore

  constructor(private firestore: Firestore) {}

  // Obtener todos los elementos de Firestore
  getLists(): Observable<ListaCompra[]> {
    const ListaCompraCollection = collection(this.firestore, this.collectionName).withConverter(ListaCompraConverter);  // Aplicamos el conversor aquí
    const productosQuery = query(ListaCompraCollection);  // Hacemos una consulta para obtener los documentos
    return from(getDocs(productosQuery)).pipe(
      map((snapshot: any) => snapshot.docs.map((doc: any) => doc.data() as ListaCompra))  // Aseguramos que 'snapshot' y 'doc' tengan el tipo adecuado
    );
  }
  getListsById(id: string):Observable<ListaCompra>{
  const docRef = doc(this.firestore, this.collectionName, id).withConverter(ListaCompraConverter);
  return from(getDoc(docRef).then(doc => doc.data() as ListaCompra));
  }

  // Agregar un nuevo recipe a Firestore
  addList(lista: ListaCompra): Promise<any> {
    const ListaCompraCollection = collection(this.firestore, this.collectionName).withConverter(ListaCompraConverter);
    return addDoc(ListaCompraCollection, lista);
  }

  // Actualizar un recipe existente en Firestore
  updateList(id: string, lista: Partial<ListaCompra>): Promise<void> {
    const listaDoc = doc(this.firestore, `${this.collectionName}/${id}`).withConverter(ListaCompraConverter);
    return updateDoc(listaDoc, lista);
  }

  // Eliminar un recipe de Firestore
  deleterecipe(id: string): Promise<void> {
    const listaDoc = doc(this.firestore, `${this.collectionName}/${id}`).withConverter(ListaCompraConverter);
    return deleteDoc(listaDoc);
  }
}
