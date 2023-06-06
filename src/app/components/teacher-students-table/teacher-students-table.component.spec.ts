import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherStudentsTableComponent } from './teacher-students-table.component';

describe('TeacherStudentsTableComponent', () => {
  let component: TeacherStudentsTableComponent;
  let fixture: ComponentFixture<TeacherStudentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherStudentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherStudentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
