import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoursubscriptionsComponent } from './yoursubscriptions.component';

describe('YoursubscriptionsComponent', () => {
  let component: YoursubscriptionsComponent;
  let fixture: ComponentFixture<YoursubscriptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoursubscriptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoursubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
