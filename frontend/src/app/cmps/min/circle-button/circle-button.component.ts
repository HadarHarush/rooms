import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent implements OnInit {
  @Input() navLink: string;
  constructor() {}

  ngOnInit(): void {}
}
