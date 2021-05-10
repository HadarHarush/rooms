import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.scss'],
})
export class ProfileImgComponent implements OnInit {
  @Input() imgUrl: string;
  @Input() imgName: string;
  constructor() {}

  ngOnInit(): void {}
}
