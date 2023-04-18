import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
    this.navCtrl.navigateForward(['movies'], navigationExtras);
  }

}