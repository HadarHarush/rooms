import { Component, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';
import { UserService } from 'src/app/services/user.service';
import { ChatService } from './services/chat.service';
import { SocketService } from './services/socket.service';
import 'angular-notifier/styles/core.scss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loggedInUser: any = null;
  constructor(
    private userService: UserService,
    private chatService: ChatService,
    private socketService: SocketService,
    private eventBus: NgEventBus
  ) {}

  ngOnInit(): void {
    this.userService.loggedInUser$.subscribe((currUser) => {
      if (currUser) {
        this.chatService.loadChats();
      }
      if (currUser !== this.loggedInUser) {
        if (currUser) {
          //loggedOut => loggedIn scanerio:
          this.socketService.terminate();
          console.log('sending setup order...');
          this.socketService.setup();
          this.socketService.join(currUser._id);
          this.socketService.on('notif', (data: any) => {
            this.eventBus.cast('notif', data);
          });
          this.socketService.on('chat-update', (ev: any) => {
            this.chatService.handleExternalUpdate(ev);
          });
          this.chatService.loadChats();
        } else if (!currUser) {
          console.log('sending eliminate order...');
          //loggedIn => loggedOut scanerio:
          this.socketService.terminate();
        }
      }
      this.loggedInUser = currUser;
    });
  }
}
