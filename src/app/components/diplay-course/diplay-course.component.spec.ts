import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplayCourseComponent } from './diplay-course.component';

describe('DiplayCourseComponent', () => {
  let component: DiplayCourseComponent;
  let fixture: ComponentFixture<DiplayCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplayCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplayCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
