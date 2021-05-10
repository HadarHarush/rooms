import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor() {}

  authType: string = 'login';

  changeAuthType(newType: string) {
    console.log('changing auth type: ', newType);
    this.authType = newType;
  }

  ngOnInit(): void {}
}
