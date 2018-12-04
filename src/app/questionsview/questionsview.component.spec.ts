import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsviewComponent } from './questionsview.component';

describe('QuestionsviewComponent', () => {
  let component: QuestionsviewComponent;
  let fixture: ComponentFixture<QuestionsviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
