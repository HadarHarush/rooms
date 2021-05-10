import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../../models/chat';

@Component({
  selector: 'chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {
  @Input() chats: Chat[] | null;
  constructor() {}

  ngOnInit(): void {}
}
