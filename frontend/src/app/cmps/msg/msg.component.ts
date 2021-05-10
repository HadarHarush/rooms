import { Component, OnInit, Input } from '@angular/core';
import { Msg } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.scss'],
})
export class MsgComponent implements OnInit {
  @Input() msg: Msg;
  loggedInUser: User;
  constructor(private userSerivce: UserService) {}

  get selfMsgClass() {
    const isSelf = this.msg.from._id === this.loggedInUser._id;
    return isSelf ? 'self' : '';
  }

  ngOnInit(): void {
    this.userSerivce.loggedInUser$.subscribe((currUser) => {
      this.loggedInUser = currUser;
    });
  }
}
