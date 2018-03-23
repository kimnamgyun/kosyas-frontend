import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart2LineComponent } from './chart2-line.component';

describe('Chart2LineComponent', () => {
  let component: Chart2LineComponent;
  let fixture: ComponentFixture<Chart2LineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart2LineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart2LineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
