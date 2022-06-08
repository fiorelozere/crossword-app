import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {v4} from 'uuid';
import { level } from '../../crossword-game/level';
import { questions } from '../../crossword-game/questions';

export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null = null;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.afAuth.onAuthStateChanged(user => {
      console.log(user);
      this.currentUser = user;
    });
  }

  async signUp({ email, password }) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    const uid = credential.user.uid;

    return this.afs.doc(`users/${uid}`).set({uid, email: credential.user.email});
  }

  async signIn({ email, password }) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    return this.afAuth.signOut();
  }

}
