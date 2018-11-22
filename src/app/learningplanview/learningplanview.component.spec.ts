import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningplanviewComponent } from './learningplanview.component';

describe('LearningplanviewComponent', () => {
  let component: LearningplanviewComponent;
  let fixture: ComponentFixture<LearningplanviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningplanviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningplanviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
