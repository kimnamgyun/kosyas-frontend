import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisAddruleComponent } from './analysis-addrule.component';

describe('AnalysisAddruleComponent', () => {
  let component: AnalysisAddruleComponent;
  let fixture: ComponentFixture<AnalysisAddruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalysisAddruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalysisAddruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
