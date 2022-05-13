import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCandidateTableComponent } from './admin-candidate-table.component';

describe('AdminCandidateTableComponent', () => {
  let component: AdminCandidateTableComponent;
  let fixture: ComponentFixture<AdminCandidateTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCandidateTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCandidateTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
