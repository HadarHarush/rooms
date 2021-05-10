import { Component, OnInit, Input } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'send-msg-bar',
  templateUrl: './send-msg-bar.component.html',
  styleUrls: ['./send-msg-bar.component.scss'],
})
export class SendMsgBarComponent implements OnInit {
  @Input() chat: Chat;
  constructor(
    private userService: UserService,
    private chatService: ChatService
  ) {}

  loggedInUser: any = null;
  txt: string;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.userService.loggedInUser$.subscribe(
      (currUser) => (this.loggedInUser = currUser)
    );
  }

  async onSendMsg() {
    this.isLoading = true;
    const { _id, username, profileImgUrl } = this.loggedInUser;
    const msg = {
      from: { _id, username, profileImgUrl },
      txt: this.txt,
      createdAt: Date.now(),
    };
    try {
      await this.chatService.addMsg(this.chat._id, msg);
    } catch (err) {
      //
    } finally {
      this.isLoading = false;
    }
  }
}
