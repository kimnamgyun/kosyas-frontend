import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntrusionLogsComponent } from './dashboard-intrusion-logs.component';

describe('DashboardIntrusionLogsComponent', () => {
  let component: DashboardIntrusionLogsComponent;
  let fixture: ComponentFixture<DashboardIntrusionLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIntrusionLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIntrusionLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
