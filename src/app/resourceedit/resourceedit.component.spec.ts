import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceeditComponent } from './resourceedit.component';

describe('ResourceeditComponent', () => {
  let component: ResourceeditComponent;
  let fixture: ComponentFixture<ResourceeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
