import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss'],
})
export class UserPreviewComponent {
  @Input() user: User;
  @Output()
  addParticipation: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  onAddParticipation() {
    this.addParticipation.emit(this.user._id);
  }
}
