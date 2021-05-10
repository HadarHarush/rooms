import { Component, OnInit } from '@angular/core';
import { Msg } from 'src/app/models/chat';
import { User } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';
import { UserService } from 'src/app/services/user.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-add',
  templateUrl: './chat-add.component.html',
  styleUrls: ['./chat-add.component.scss'],
})
export class ChatAddComponent implements OnInit {
  constructor(
    private userService: UserService,
    private chatService: ChatService,
    private notifierService: NotifierService,
    private router: Router
  ) {}

  loggedInUser: any;
  users: User[] = [];
  get usersToShow() {
    return this.users.filter((currUser) => {
      return (
        currUser._id !== this.loggedInUser?._id &&
        !this.participationsIds.includes(currUser._id)
      );
    });
  }
  name: string = '';
  participationsIds: string[] = [];
  imgUrl: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ic-6gUea7KhPvJHPMP-Z9wFrT7qiVlTmCQ&usqp=CAU';

  get participations() {
    return this.participationsIds.map((currId) => {
      const { _id, username, profileImgUrl } = this.users.find(
        (currUser) => currUser._id === currId
      );
      return {
        _id,
        username,
        profileImgUrl,
      };
    });
  }

  onAddParticipation(newPrtId: any) {
    this.participationsIds = [...this.participationsIds, newPrtId];
  }
  onRemoveParticipation(PrtId: any) {
    this.participationsIds = this.participationsIds.filter(
      (currPrt) => currPrt !== PrtId
    );
  }
  changeName(newVal: string) {
    this.name = newVal;
  }
  changeImgUrl(newVal: string) {
    this.imgUrl = newVal;
  }

  async onAddChat() {
    //validation...
    if (!this.participations?.length) {
      this.notifierService.notify(
        'error',
        'You need to add at least one member'
      );
      return;
    }

    const newChat = {
      msgs: [] as Msg[],
      name: this.name,
      participations: [
        {
          _id: this.loggedInUser._id,
          username: this.loggedInUser.username,
          profileImgUrl: this.loggedInUser.profileImgUrl,
        },
        ...this.participations,
      ],
      imgUrl: this.imgUrl,
    };
    try {
      const chatId = await this.chatService.addChat(newChat);
      this.notifierService.notify('success', 'Added chat');
      this.router.navigateByUrl(`/chat/${chatId}`);
    } catch (err) {
      this.notifierService.notify(
        'error',
        'Error while trying to add chat in server'
      );
    }
  }

  ngOnInit(): void {
    this.userService.loggedInUser$.subscribe((currUser) => {
      this.loggedInUser = currUser;
    });

    this.userService.users$.subscribe((currUsers) => {
      this.users = currUsers;
    });
  }
}
