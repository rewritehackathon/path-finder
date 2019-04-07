import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppcompsComponent } from './appcomps.component';

describe('AppcompsComponent', () => {
  let component: AppcompsComponent;
  let fixture: ComponentFixture<AppcompsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppcompsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppcompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
