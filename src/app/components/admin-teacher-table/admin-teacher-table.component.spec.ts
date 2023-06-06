import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeacherTableComponent } from './admin-teacher-table.component';

describe('AdminTeacherTableComponent', () => {
  let component: AdminTeacherTableComponent;
  let fixture: ComponentFixture<AdminTeacherTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTeacherTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTeacherTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
