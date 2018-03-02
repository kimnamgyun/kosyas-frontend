import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntrusionRulesComponent } from './dashboard-intrusion-rules.component';

describe('DashboardIntrusionRulesComponent', () => {
  let component: DashboardIntrusionRulesComponent;
  let fixture: ComponentFixture<DashboardIntrusionRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIntrusionRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIntrusionRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
