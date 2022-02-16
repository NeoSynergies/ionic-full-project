import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HeaderService } from '../../services/header/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public headerService: HeaderService,
    private msalService: MsalService
  ) { }

  ngOnInit() {
    this.headerService.headerTitle.next('Feed');
  }

  public isLoggedIn() {
    return this.msalService.instance.getActiveAccount() != null;
  }

}
