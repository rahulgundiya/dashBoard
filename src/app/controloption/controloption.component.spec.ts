import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControloptionComponent } from './controloption.component';

describe('ControloptionComponent', () => {
  let component: ControloptionComponent;
  let fixture: ComponentFixture<ControloptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControloptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControloptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
