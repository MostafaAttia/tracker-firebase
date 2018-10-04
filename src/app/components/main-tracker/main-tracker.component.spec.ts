import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTrackerComponent } from './main-tracker.component';

describe('MainTrackerComponent', () => {
  let component: MainTrackerComponent;
  let fixture: ComponentFixture<MainTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
