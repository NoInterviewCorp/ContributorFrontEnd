import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlearningplanComponent } from './editlearningplan.component';

describe('EditlearningplanComponent', () => {
  let component: EditlearningplanComponent;
  let fixture: ComponentFixture<EditlearningplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditlearningplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditlearningplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
