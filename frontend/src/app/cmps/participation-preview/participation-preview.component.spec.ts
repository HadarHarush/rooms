import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationPreviewComponent } from './participation-preview.component';

describe('ParticipationPreviewComponent', () => {
  let component: ParticipationPreviewComponent;
  let fixture: ComponentFixture<ParticipationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipationPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
