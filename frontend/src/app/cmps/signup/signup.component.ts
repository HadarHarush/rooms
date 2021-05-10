import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @Output()
  onChangeAuthType: EventEmitter<string> = new EventEmitter();
  constructor(private userService: UserService, private router: Router) {}

  username: any = '';
  password: any = '';
  fullname: any = 'Mach-Patcha';
  mail: any = 'MachPatcha@gmail.com';
  isLoading: boolean = false;

  async onSubmit() {
    this.isLoading = true;
    const { username, password, fullname, mail } = this;
    try {
      await this.userService.signup({ username, password, fullname, mail });
      this.router.navigateByUrl('/');
    } catch (err) {
      //
    } finally {
      this.isLoading = false;
    }
  }

  changeAuthType() {
    this.onChangeAuthType.emit('login');
  }

  ngOnInit(): void {
    console.log('creating signup cmp...');
  }
}
