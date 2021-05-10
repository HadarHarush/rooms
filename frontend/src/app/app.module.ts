import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatDetailsComponent } from './pages/chat-details/chat-details.component';
import { ChatPreviewComponent } from './cmps/chat-preview/chat-preview.component';
import { ChatListComponent } from './cmps/chat-list/chat-list.component';
import { MsgComponent } from './cmps/msg/msg.component';
import { SendMsgBarComponent } from './cmps/send-msg-bar/send-msg-bar.component';
import { HeaderComponent } from './cmps/header/header.component';
import { ChatAddComponent } from './pages/chat-add/chat-add.component';
import { UserListComponent } from './cmps/user-list/user-list.component';
import { UserPreviewComponent } from './cmps/user-preview/user-preview.component';
import { ParticipationPreviewComponent } from './cmps/participation-preview/participation-preview.component';
import { ProfileImgComponent } from './cmps/min/profile-img/profile-img.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierModule } from 'angular-notifier';

//services:
import { NgEventBus } from 'ng-event-bus';
import { SocketService } from './services/socket.service';

//meterial:
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';

import { CircleButtonComponent } from './cmps/min/circle-button/circle-button.component';
import { NotificationComponent } from './cmps/notification/notification.component';
import { LoadingComponent } from './cmps/min/loading/loading.component';
import { LoginComponent } from './cmps/login/login.component';
import { SignupComponent } from './cmps/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    AuthComponent,
    ChatDetailsComponent,
    ChatPreviewComponent,
    ChatListComponent,
    MsgComponent,
    SendMsgBarComponent,
    HeaderComponent,
    ChatAddComponent,
    UserListComponent,
    UserPreviewComponent,
    ParticipationPreviewComponent,
    ProfileImgComponent,
    CircleButtonComponent,
    NotificationComponent,
    LoadingComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRippleModule,
    NotifierModule,
  ],
  providers: [NgEventBus, SocketService],
  bootstrap: [AppComponent],
})
export class AppModule {}
