import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MiniUser, User } from 'src/app/models/user';

@Component({
  selector: 'participation-preview',
  templateUrl: './participation-preview.component.html',
  styleUrls: ['./participation-preview.component.scss'],
})
export class ParticipationPreviewComponent implements OnInit {
  @Input() user: MiniUser;
  @Output()
  removeParticipation: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  onRemoveParticipation() {
    this.removeParticipation.emit(this.user._id);
  }
  ngOnInit(): void {}
}
