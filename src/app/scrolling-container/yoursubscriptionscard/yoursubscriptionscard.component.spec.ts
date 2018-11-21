import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoursubscriptionscardComponent } from './yoursubscriptionscard.component';

describe('YoursubscriptionscardComponent', () => {
  let component: YoursubscriptionscardComponent;
  let fixture: ComponentFixture<YoursubscriptionscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoursubscriptionscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoursubscriptionscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
