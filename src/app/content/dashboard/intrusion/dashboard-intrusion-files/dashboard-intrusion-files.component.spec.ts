import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntrusionFilesComponent } from './dashboard-intrusion-files.component';

describe('DashboardIntrusionFilesComponent', () => {
  let component: DashboardIntrusionFilesComponent;
  let fixture: ComponentFixture<DashboardIntrusionFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardIntrusionFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardIntrusionFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
