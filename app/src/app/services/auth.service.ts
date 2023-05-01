import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  userData: any;
  logged: boolean = false;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
      }
    });
  }

  checkLogged() {
    if (localStorage.getItem('user') === null) {
      this.userData = null;
      return false;
    }
    return true;
  }

  doSignup(value: { email: string; password: string; }) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res)
          },
          err => reject(err))
    })
  }

  doLogin(value: { email: string; password: string; }) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res)
          },
          err => reject(err))
    })
  }

  doLogout() {
    return new Promise<void>((resolve, reject) => {
      this.afAuth.signOut()
        .then(() => {
          localStorage.removeItem('user');
          resolve();
        }).catch((error) => {
          console.log(error);
          reject();
        });
    })
  }
}
