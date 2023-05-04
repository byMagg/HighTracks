import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,]
})
export class HomePage implements OnInit {

  query: string | undefined;

  constructor(private navCtrl: NavController, private authService: AuthService) { }

  ngOnInit() { }

  search() {
    let navigationExtras: NavigationExtras = {
      queryParams: { s: this.query },
    };
    this.navCtrl.navigateForward(['tracks'], navigationExtras);
  }
}