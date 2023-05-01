import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, RouterModule } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    IonicModule,
    RouterModule]
})
export class HomePage implements OnInit {

  searchTerm: string = '';
  checked: boolean = false;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {

  }

  search() {
    let navigationExtras: NavigationExtras = {
      relativeTo: this.route,
      queryParams: { s: this.searchTerm },
    };
    this.navCtrl.navigateForward(['tracks'], navigationExtras);
  }

}