import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/common/services/header/header.service';
@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss'],
})
export class HomeContainerComponent {
  constructor(
    private headerService: HeaderService
  ) { }

  ionViewWillEnter() {
    this.headerService.headerTitle.next('Feed');
  }
}
