import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {

  constructor(private auth :Auth) {}
  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
