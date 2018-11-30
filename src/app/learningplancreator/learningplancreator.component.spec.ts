import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { learningplancreatorComponent } from './learningplancreator.component';

describe('learningplancreatorComponent', () => {
  let component: learningplancreatorComponent;
  let fixture: ComponentFixture<learningplancreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ learningplancreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(learningplancreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
