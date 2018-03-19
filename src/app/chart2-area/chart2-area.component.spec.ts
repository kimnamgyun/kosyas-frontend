import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart2AreaComponent } from './chart2-area.component';

describe('Chart2AreaComponent', () => {
  let component: Chart2AreaComponent;
  let fixture: ComponentFixture<Chart2AreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart2AreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart2AreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
