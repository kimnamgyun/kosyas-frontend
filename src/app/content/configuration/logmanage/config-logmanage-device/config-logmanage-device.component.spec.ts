import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLogmanageDeviceComponent } from './config-logmanage-device.component';

describe('ConfigLogmanageDeviceComponent', () => {
  let component: ConfigLogmanageDeviceComponent;
  let fixture: ComponentFixture<ConfigLogmanageDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigLogmanageDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLogmanageDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
