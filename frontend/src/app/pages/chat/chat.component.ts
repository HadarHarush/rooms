import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Chat } from 'src/app/models/chat';
import { UserService } from 'src/app/services/user.service';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  subscription: Subscription;
  chats: [] | null;
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    //load the the chats...
    this.chatService.loadChats();

    //subscribe to get updates...
    this.chatService.chats$.subscribe((currChats) => {
      this.chats = currChats;
    });
  }

  // async onLoadChat(chatId: string) {
  //   try {
  //     await this.chatService.loadChat(chatId);
  //   } catch (err) {
  //     console.log('error while trying fetch chat: ', err);
  //     throw err;
  //   }
  // }

  trackByFn(idx: number, chat: Chat) {
    return chat._id;
  }
}
