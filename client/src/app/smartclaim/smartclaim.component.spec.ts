import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartclaimComponent } from './smartclaim.component';

describe('SmartclaimComponent', () => {
  let component: SmartclaimComponent;
  let fixture: ComponentFixture<SmartclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
