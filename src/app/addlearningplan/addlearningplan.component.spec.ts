import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlearningplanComponent } from './addlearningplan.component';

describe('AddlearningplanComponent', () => {
  let component: AddlearningplanComponent;
  let fixture: ComponentFixture<AddlearningplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlearningplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlearningplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
