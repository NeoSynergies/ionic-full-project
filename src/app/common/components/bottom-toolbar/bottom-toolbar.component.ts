import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss'],
})
export class BottomToolbarComponent implements OnInit {

  constructor(
    private msalService: MsalService
  ) { }

  ngOnInit() {}

  public isLoggedIn() {
    return this.msalService.instance.getActiveAccount() != null;
  }
  
}
