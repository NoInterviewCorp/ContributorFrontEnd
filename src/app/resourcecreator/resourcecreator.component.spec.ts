import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { resourcecreatorComponent } from './resourcecreator.component';

describe('resourcecreatorComponent', () => {
  let component: resourcecreatorComponent;
  let fixture: ComponentFixture<resourcecreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ resourcecreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(resourcecreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
