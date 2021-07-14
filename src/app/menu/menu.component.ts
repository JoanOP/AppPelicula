import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router, public loadingController: LoadingController) {}

  ngOnInit() {

  }

  cerrarSesion() {
    this.presentLoading();

  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Espere por favor...',
      duration: 1000
    });
    await loading.present();

    const {
      role,
      data
    } = await loading.onDidDismiss();
    localStorage.clear();
    this.router.navigate(['home']);
  }

}
