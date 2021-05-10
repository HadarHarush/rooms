import { Injectable, isDevMode } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  constructor() {
    console.log('socket service created!');
  }
  //dev:
  // baseUrl = '//localhost:3030';
  //prod:
  baseUrl = '';
  socket: any;
  setup() {
    console.log('setupping');
    this.socket = io(this.baseUrl);
    return this.socket;
  }
  on(eventName: string, cb: any) {
    this.socket.off(eventName, cb).on(eventName, cb);
  }
  off(eventName: string, cb: any) {
    this.socket.off(eventName, cb);
  }
  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
  join(channel: string) {
    console.log('joining room...', channel);
    this.emit('join', channel);
  }
  terminate() {
    console.log('disconnecting');
    this.socket?.disconnect();
    this.socket = null;
  }
}
