import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ChatAddComponent } from './pages/chat-add/chat-add.component';
import { AuthGuard } from './gurads/auth.guard';
import { ChatDetailsComponent } from './pages/chat-details/chat-details.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, canActivate: [AuthGuard] },
  {
    path: 'chat/add',
    component: ChatAddComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'chat/:chatId',
    component: ChatDetailsComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'chat',
    component: ChatComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/chat', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
