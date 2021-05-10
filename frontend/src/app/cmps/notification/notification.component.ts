import { Component, OnInit } from '@angular/core';
import { NgEventBus } from 'ng-event-bus';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  constructor(private eventBus: NgEventBus) {}

  ngOnInit(): void {
    this.eventBus.on('notif').subscribe((metaData: any) => {
      console.log('*notif*, metaData:', metaData);
    });
    this.eventBus.on('chat-update').subscribe((metaData: any) => {
      console.log('*chat-update*, metaData:', metaData);
    });
  }
}
