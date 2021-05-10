import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMsgBarComponent } from './send-msg-bar.component';

describe('SendMsgBarComponent', () => {
  let component: SendMsgBarComponent;
  let fixture: ComponentFixture<SendMsgBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendMsgBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMsgBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
