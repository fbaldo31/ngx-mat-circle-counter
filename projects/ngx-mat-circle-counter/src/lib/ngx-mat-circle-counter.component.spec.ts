import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatCircleCounterComponent } from './ngx-mat-circle-counter.component';

describe('NgxMatCircleCounterComponent', () => {
  let component: NgxMatCircleCounterComponent;
  let fixture: ComponentFixture<NgxMatCircleCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatCircleCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatCircleCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
