import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class VisualService {

  constructor(
    private alertController: AlertController
  ) { }

  async showUnauthorizedSocialActionPopup() {
    const alert = await this.alertController.create({
      header: 'Register or sign in to proceed!',
      message: 'To be able to perform that action, you must login or register.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
