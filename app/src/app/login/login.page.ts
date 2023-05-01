import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {

  formValidationLogin: FormGroup | undefined;
  formValidationSignup: FormGroup | undefined;
  errorMessage: string = '';

  formValidationMessages = {
    'email': [
      { type: 'required', message: 'El email es un campo obligatorio.' },
      { type: 'pattern', message: 'El formato del email no es correcto.' }
    ],
    'password': [
      { type: 'required', message: 'La contraseña es un campo obligatorio.' },
      { type: 'minlength', message: 'La lóngitud mínima de una contraseña es 6 caracteres.' }
    ]
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formValidationLogin = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
    this.formValidationSignup = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }

  trySignup(value: { email: string; password: string; }) {
    this.authService.doSignup(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.router.navigate(["/home"]);
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      })
  }


  tryLogin(value: { email: string; password: string; }) {
    this.authService.doLogin(value)
      .then(res => {
        this.router.navigate(["/home"]);
        console.log(res)
      }, err => {
        this.errorMessage = 'Error al autenticar'
        if (err.code == "auth/wrong-password") this.errorMessage = "Contraseña incorrecta"
        if (err.code == "auth/user-not-found") this.errorMessage = "Usuario no encontrado"
      })
  }
}