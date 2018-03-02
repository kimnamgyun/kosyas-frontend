import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSystemsComponent } from './dashboard-systems.component';

describe('DashboardSystemsComponent', () => {
  let component: DashboardSystemsComponent;
  let fixture: ComponentFixture<DashboardSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
