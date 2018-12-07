import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestedtechnologiesComponent } from './testedtechnologies.component';

describe('TestedtechnologiesComponent', () => {
  let component: TestedtechnologiesComponent;
  let fixture: ComponentFixture<TestedtechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestedtechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestedtechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
