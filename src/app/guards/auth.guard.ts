import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TokenService } from '../services/token.service';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenService: TokenService, private route: Router, private authService: AuthService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //const token = this.tokenService.getToken();
    //if (!token) {
    //  this.route.navigate(['/home']);
    //  return false;
    //}
    // return true;
    return this.authService.user$.pipe(
      map(user => {
        if (!user) {
          this.route.navigate(['/home']);
          return false;
        }
        return true;
      })
    )
  }

}
