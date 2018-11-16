import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingContainerComponent } from './scrolling-container.component';

describe('ScrollingContainerComponent', () => {
  let component: ScrollingContainerComponent;
  let fixture: ComponentFixture<ScrollingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
