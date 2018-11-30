import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { learningplanviewerComponent } from './learningplanviewer.component';

describe('learningplanviewerComponent', () => {
  let component: learningplanviewerComponent;
  let fixture: ComponentFixture<learningplanviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ learningplanviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(learningplanviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
