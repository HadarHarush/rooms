import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../models/chat';
import { UtilService } from './util.service';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private http: HttpClient,
    private utilService: UtilService,
    private notifierService: NotifierService
  ) {
    this.chats$.subscribe((currChats) => (this.chats = currChats));
  }
  //dev:
  // baseUrl = '//localhost:3030/api/';
  //prod:
  baseUrl = '/api/';
  chats: Chat[];

  private _chats$ = new BehaviorSubject(null);
  public chats$ = this._chats$.asObservable();

  public addToObservableArray(chat: Chat) {
    if (this.chats.find((currChat) => currChat._id === chat._id)) {
      return;
    }
    this._chats$.next([...this.chats, chat]);
  }

  public removeFromObservableArray(chatId: string) {
    const updatedChats = this.chats.filter(
      (currChat) => currChat._id !== chatId
    );
    this._chats$.next(updatedChats);
  }

  public updateInObservableArray(chat: Chat) {
    const chatIdx = this.chats.findIndex(
      (currChat) => currChat._id === chat._id
    );
    if (chatIdx < 0) return;
    const updatedChats = JSON.parse(JSON.stringify(this.chats));
    updatedChats.splice(chatIdx, 1, chat);
    this._chats$.next(updatedChats);
  }

  public handleExternalUpdate(socketEv: any) {
    if (socketEv.type === 'chat-add') {
      //chat-add scanerio...
      console.log('handeling chat-add update... ', socketEv);
      this.addToObservableArray(socketEv.chat);
      this.notifierService.notify(
        'success',
        `You have been added to room #${socketEv.chat.name}`
      );
    } else if (socketEv.type === 'chat-remove') {
      //chat-remove scanerio
      console.log('handeling chat-remove update... ', socketEv);
      this.removeFromObservableArray(socketEv.chatId);
      //notif
    } else if (socketEv.type === 'chat-add-msg') {
      //chat-add-msg scanrio
      console.log('handeling chat-add-msg update... ', socketEv);
      this.updateInObservableArray(socketEv.chat);
      const { chat } = socketEv;
      const msg = chat.msgs[chat.msgs.length - 1];
      this.notifierService.notify(
        'success',
        `#${chat.name} - ${msg.from.username}: ${msg.txt}`
      );
    }
  }

  public async loadChats() {
    try {
      const chats: any = await this.http
        .get(`${this.baseUrl}chat`, { withCredentials: true })
        .toPromise();
      this._chats$.next(chats);
      return this.chats$;
    } catch (err) {
      console.log('error while trying fetch chats...', err);
      throw err;
    }
  }

  public async addChat(newChat: any) {
    try {
      const updatedChat: any = await this.http
        .post(`${this.baseUrl}chat`, newChat, {
          withCredentials: true,
        })
        .toPromise();

      this.addToObservableArray(updatedChat);
      return updatedChat._id;
    } catch (err) {
      console.log('error while trying to add chat...', err);
      throw err;
    }
  }
  public async addMsg(chatId: string, msg: any) {
    try {
      msg.id = this.utilService.makeId();
      const updatedMsg: any = await this.http
        .post(`${this.baseUrl}chat/${chatId}/msg`, msg, {
          withCredentials: true,
        })
        .toPromise();

      // const lastChat = JSON.parse(JSON.stringify(this.chat));
      const lastChat = JSON.parse(
        JSON.stringify(this.chats.find((currChat) => currChat._id === chatId))
      );
      lastChat.msgs = [...lastChat.msgs, updatedMsg];
      const lastChats: Chat[] = JSON.parse(JSON.stringify(this.chats));
      const chatIdx = lastChats.findIndex(
        (currChat) => currChat._id === chatId
      );
      lastChats.splice(chatIdx, 1, lastChat);
      this._chats$.next(lastChats);
      return this.chats$;
    } catch (err) {
      console.log('error while trying fetch chat...', err);
      throw err;
    }
  }
}
