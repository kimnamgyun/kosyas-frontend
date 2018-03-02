import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisMainComponent } from './analysis-main.component';

describe('AnalysisMainComponent', () => {
  let component: AnalysisMainComponent;
  let fixture: ComponentFixture<AnalysisMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
