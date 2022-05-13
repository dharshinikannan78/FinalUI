import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmnetsComponent } from './attachmnets.component';

describe('AttachmnetsComponent', () => {
  let component: AttachmnetsComponent;
  let fixture: ComponentFixture<AttachmnetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachmnetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmnetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
