import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcontributionscardComponent } from './yourcontributionscard.component';

describe('YourcontributionscardComponent', () => {
  let component: YourcontributionscardComponent;
  let fixture: ComponentFixture<YourcontributionscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YourcontributionscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YourcontributionscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
