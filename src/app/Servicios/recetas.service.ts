import { QueryDocumentSnapshot } from './../../../node_modules/@firebase/firestore-types/index.d';
import { Query } from './../../../node_modules/@firebase/database-types/index.d';
import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { Firestore, collection, getDocs, getDoc, doc, addDoc, updateDoc, deleteDoc, FirestoreDataConverter, query } from '@angular/fire/firestore';
import { Observable, from, scheduled } from 'rxjs';
import { map } from 'rxjs/operators';  // Importamos 'map' desde rxjs/operators
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

const recipeConverter: FirestoreDataConverter<Recipe> = {
  toFirestore(recipe: Recipe) {
    return {
        title: recipe.title,
        image: recipe.image,
        description: recipe.description,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
    };
  },
  fromFirestore(snapshot: any): Recipe {
    const data = snapshot.data();
    console.log(snapshot)
    return {
      id: snapshot.id,
      title: data.title,
      image: data.image,
      description: data.description,
      ingredients: data.ingredients,
      instructions: data.instructions,
    };
  }
};

@Injectable({
  providedIn: 'root'
})
export class RecetasService {
  private collectionName = 'recipes';  // Nombre de la colección en Firestore

  constructor(private firestore: Firestore) {}

  // Obtener todos los elementos de Firestore
  getrecipes(): Observable<Recipe[]> {
    const recipesCollection = collection(this.firestore, this.collectionName).withConverter(recipeConverter);  // Aplicamos el conversor aquí
    const recipesQuery = query(recipesCollection);  // Hacemos una consulta para obtener los documentos
    return from(getDocs(recipesQuery)).pipe(
      map((snapshot: any) => snapshot.docs.map((doc: any) => doc.data() as Recipe))  // Aseguramos que 'snapshot' y 'doc' tengan el tipo adecuado
    );
  }
  getRecipeById(id: string):Observable<Recipe>{
  const docRef = doc(this.firestore, this.collectionName, id).withConverter(recipeConverter);
  return from(getDoc(docRef).then(doc => doc.data() as Recipe));
  }

  // Agregar un nuevo recipe a Firestore
  addrecipe(recipe: Recipe): Promise<any> {
    const recipesCollection = collection(this.firestore, this.collectionName).withConverter(recipeConverter);
    return addDoc(recipesCollection, recipe);
  }

  // Actualizar un recipe existente en Firestore
  updaterecipe(id: string, recipe: Partial<Recipe>): Promise<void> {
    const recipeDoc = doc(this.firestore, `${this.collectionName}/${id}`).withConverter(recipeConverter);
    return updateDoc(recipeDoc, recipe);
  }

  // Eliminar un recipe de Firestore
  deleterecipe(id: string): Promise<void> {
    const recipeDoc = doc(this.firestore, `${this.collectionName}/${id}`).withConverter(recipeConverter);
    return deleteDoc(recipeDoc);
  }
}
