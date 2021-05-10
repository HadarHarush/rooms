import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @Output()
  onChangeAuthType: EventEmitter<string> = new EventEmitter();
  constructor(private userService: UserService, private router: Router) {}
  username: any = '';
  password: any = '';
  isLoading: boolean = false;

  async onSubmit() {
    this.isLoading = true;
    try {
      await this.userService.login(this.username, this.password);
      this.router.navigateByUrl('/');
    } catch (err) {
      //
    } finally {
      this.isLoading = false;
    }
  }

  changeAuthType() {
    this.onChangeAuthType.emit('signup');
  }

  async onGuest() {
    this.username = 'guest';
    this.password = 'guest';
    this.onSubmit();
  }

  ngOnInit(): void {}
}
