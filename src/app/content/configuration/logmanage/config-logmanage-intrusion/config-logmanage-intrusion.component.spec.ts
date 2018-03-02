import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLogmanageIntrusionComponent } from './config-logmanage-intrusion.component';

describe('ConfigLogmanageIntrusionComponent', () => {
  let component: ConfigLogmanageIntrusionComponent;
  let fixture: ComponentFixture<ConfigLogmanageIntrusionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigLogmanageIntrusionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigLogmanageIntrusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
