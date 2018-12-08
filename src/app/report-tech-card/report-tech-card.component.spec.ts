import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTechCardComponent } from './report-tech-card.component';

describe('ReportTechCardComponent', () => {
  let component: ReportTechCardComponent;
  let fixture: ComponentFixture<ReportTechCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportTechCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportTechCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
