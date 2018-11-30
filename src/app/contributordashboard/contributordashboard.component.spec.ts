import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { contributordashboardComponent } from './contributordashboard.component';

describe('contributordashboardComponent', () => {
  let component: contributordashboardComponent;
  let fixture: ComponentFixture<contributordashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ contributordashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(contributordashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
