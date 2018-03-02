import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntrusionOverviewComponent } from './dashboard-intrusion-overview.component';

describe('DashboardIntrusionOverviewComponent', () => {
  let component: DashboardIntrusionOverviewComponent;
  let fixture: ComponentFixture<DashboardIntrusionOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIntrusionOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIntrusionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
