import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntrusionDevicesComponent } from './dashboard-intrusion-devices.component';

describe('DashboardIntrusionDevicesComponent', () => {
  let component: DashboardIntrusionDevicesComponent;
  let fixture: ComponentFixture<DashboardIntrusionDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIntrusionDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIntrusionDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
