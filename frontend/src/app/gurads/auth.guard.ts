import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {
    this.userService.loggedInUser$.subscribe(
      (currUser) => (this.loggedInUser = currUser)
    );
  }

  loggedInUser: any = null;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (state.url === '/auth') {
      //want to go to auth scanerio...
      if (this.loggedInUser) this.router.navigateByUrl('/');
    } else {
      //want to go to app scanerio...

      if (!this.loggedInUser) this.router.navigateByUrl('/auth');
    }
    return true;
  }
}
