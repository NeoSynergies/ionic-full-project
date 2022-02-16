import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';
import { AlertController } from '@ionic/angular';
import { HeaderService } from 'src/app/common/services/header/header.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent {

  constructor(
    private headerService: HeaderService,
    private msalService: MsalService
  ) { }

  ionViewWillEnter() {
    this.headerService.headerTitle.next('Login');
  }

  onLogin(event) {
    console.log('Event recorded');
    console.log(event);
    
    this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.msalService.instance.setActiveAccount(response.account);
    })
  }

  onLogout() {
    this.msalService.logoutPopup({
      mainWindowRedirectUri: "/"
    });
  }

  isLoggedIn() {
    console.log(this.msalService.instance.getActiveAccount());
  }

}
