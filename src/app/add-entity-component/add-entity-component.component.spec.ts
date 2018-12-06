import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntityComponentComponent } from './add-entity-component.component';

describe('AddEntityComponentComponent', () => {
  let component: AddEntityComponentComponent;
  let fixture: ComponentFixture<AddEntityComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEntityComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
