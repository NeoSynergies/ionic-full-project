import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';
import { VisualService } from '../visual/visual.service';

@Injectable({
  providedIn: 'root'
})
export class MsalAuthGuard implements CanActivate {
  constructor(
    private msalService: MsalService,
    private router: Router,
    private visualService: VisualService
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.msalService.instance.getActiveAccount() == null) {
        this.visualService.showUnauthorizedSocialActionPopup();
        this.router.navigate(['/login']);
      }
    return true;
  }
  
}
