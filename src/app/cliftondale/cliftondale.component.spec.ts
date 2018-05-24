import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliftondaleComponent } from './cliftondale.component';

describe('CliftondaleComponent', () => {
  let component: CliftondaleComponent;
  let fixture: ComponentFixture<CliftondaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliftondaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliftondaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
