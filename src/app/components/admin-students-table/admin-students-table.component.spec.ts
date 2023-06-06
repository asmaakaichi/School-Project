import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStudentsTableComponent } from './admin-students-table.component';

describe('AdminStudentsTableComponent', () => {
  let component: AdminStudentsTableComponent;
  let fixture: ComponentFixture<AdminStudentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminStudentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
