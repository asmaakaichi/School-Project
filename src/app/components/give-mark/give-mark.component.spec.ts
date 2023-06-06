import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveMarkComponent } from './give-mark.component';

describe('GiveMarkComponent', () => {
  let component: GiveMarkComponent;
  let fixture: ComponentFixture<GiveMarkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveMarkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
