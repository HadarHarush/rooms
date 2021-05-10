import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  loggedInUser: any = null;
  ngOnInit(): void {
    this.userService.loggedInUser$.subscribe((currUser) => {
      this.loggedInUser = currUser;
    });
  }

  async onLogout() {
    try {
      await this.userService.logout();
      this.router.navigateByUrl('/auth');
    } catch (err) {
      console.log('error while trying log out from user service: ', err);
      throw err;
    }
  }
}
