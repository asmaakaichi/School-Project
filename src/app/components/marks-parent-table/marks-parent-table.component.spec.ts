import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksParentTableComponent } from './marks-parent-table.component';

describe('MarksParentTableComponent', () => {
  let component: MarksParentTableComponent;
  let fixture: ComponentFixture<MarksParentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksParentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksParentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
