import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ChatService } from '../../services/chat.service';
import { Chat } from '../../models/chat';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'chat-details',
  templateUrl: './chat-details.component.html',
  styleUrls: ['./chat-details.component.scss'],
})
export class ChatDetailsComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute,
    private eventBus: NgEventBus
  ) {}

  subscription: Subscription;
  chatId: string | null;
  chat: any;

  ngOnInit(): void {
    // load the relevant chat...
    this.subscription = this.route.params.subscribe(({ chatId }) => {
      console.log('chatId:', chatId);
      this.chatId = chatId;
    });

    //subscribe to get updates...
    this.chatService.chats$.subscribe((currChats) => {
      this.chat = currChats.find(
        (currChat: Chat) => currChat._id === this.chatId
      );
    });
    this.eventBus.cast('notif', 'hello from chat details!!!');
  }

  get usersList() {
    if (!this.chat) return [];
    const res = this.chat.participations.map((currPrt: any) => {
      return `@${currPrt.username}`;
    });
    return res.join(', ');
  }

  trackByFn(idx: number, chat: Chat) {
    return chat._id;
  }
}
