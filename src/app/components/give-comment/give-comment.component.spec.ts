import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveCommentComponent } from './give-comment.component';

describe('GiveCommentComponent', () => {
  let component: GiveCommentComponent;
  let fixture: ComponentFixture<GiveCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
