import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribecardComponent } from './subscribecard.component';

describe('SubscribecardComponent', () => {
  let component: SubscribecardComponent;
  let fixture: ComponentFixture<SubscribecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
