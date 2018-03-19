import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart2PieComponent } from './chart2-pie.component';

describe('Chart2PieComponent', () => {
  let component: Chart2PieComponent;
  let fixture: ComponentFixture<Chart2PieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart2PieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart2PieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
