import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public static logged: boolean = false;
  userData: any;
  token: string | undefined;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    private http: HttpClient
  ) {
    this.updateLogin();
  }

  updateLogin() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        AuthService.logged = true;
      } else {
        this.userData = null;
        localStorage.removeItem('user');
        AuthService.logged = false;
      }
    });
    console.log('Logged: ' + AuthService.logged)
    console.log('JWT: ' + this.getJWT())
  }

  checkLogged() {
    if (localStorage.getItem('user') === null) {
      this.userData = null;
      AuthService.logged = false;
      return false;
    }
    AuthService.logged = true;
    return true;
  }

  doSignup(value: { email: string; password: string; }) {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => {
            resolve(res)
            this.updateLogin();
          },
          err => reject(err))
    })
  }

  async doLogin(value: { email: string; password: string; }) {
    try {
      const response = await this.afAuth.signInWithEmailAndPassword(value.email, value.password);
      if (response.user) {
        this.updateLogin();
        return response;
      }
    } catch (error) {
      return error;
    }
  }

  async doLogout() {
    try {
      await this.afAuth.signOut();
      this.updateLogin();
    } catch (error) {
      console.log(error);
    }
  }

  fetchJWT() {
    this.http.post('http://localhost:3000/api/login', {
      email: "test@test.com",
    }).subscribe((res: any) => {
      localStorage.setItem('JWT', res.token);
      this.token = res.token;
    });
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getJWT() {
    return localStorage.getItem('JWT');
  }
}
