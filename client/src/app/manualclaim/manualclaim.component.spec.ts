import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualclaimComponent } from './manualclaim.component';

describe('ManualclaimComponent', () => {
  let component: ManualclaimComponent;
  let fixture: ComponentFixture<ManualclaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualclaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualclaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
