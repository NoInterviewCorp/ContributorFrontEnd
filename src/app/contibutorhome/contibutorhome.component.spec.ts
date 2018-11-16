import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContibutorhomeComponent } from './contibutorhome.component';

describe('ContibutorhomeComponent', () => {
  let component: ContibutorhomeComponent;
  let fixture: ComponentFixture<ContibutorhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContibutorhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContibutorhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
