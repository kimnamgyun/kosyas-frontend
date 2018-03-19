import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisConfig1Component } from './analysis-config1.component';

describe('AnalysisConfig1Component', () => {
  let component: AnalysisConfig1Component;
  let fixture: ComponentFixture<AnalysisConfig1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisConfig1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisConfig1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
