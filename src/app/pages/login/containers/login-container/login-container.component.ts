import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/common/services/header/header.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
})
export class LoginContainerComponent {

  constructor(
    private headerService: HeaderService
  ) { }

  ionViewWillEnter() {
    this.headerService.headerTitle.next('Login');
  }

  onLogin(event) {
    console.log('Event recorded');
    console.log(event);
    
  }

}
