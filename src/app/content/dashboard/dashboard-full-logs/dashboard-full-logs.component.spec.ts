import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFullLogsComponent } from './dashboard-full-logs.component';

describe('DashboardFullLogsComponent', () => {
  let component: DashboardFullLogsComponent;
  let fixture: ComponentFixture<DashboardFullLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFullLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFullLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
