import { Component, OnInit, Input } from '@angular/core';
import { Chat } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.scss'],
})
export class ChatPreviewComponent implements OnInit {
  @Input() chat: Chat;

  constructor() {}
  get lastMsg() {
    if (!this.chat) return null;
    return this.chat.msgs[this.chat.msgs.length - 1];
  }

  ngOnInit(): void {}
}
