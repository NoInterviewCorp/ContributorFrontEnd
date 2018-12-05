import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesviewComponent } from './resourcesview.component';

describe('ResourcesviewComponent', () => {
  let component: ResourcesviewComponent;
  let fixture: ComponentFixture<ResourcesviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourcesviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
