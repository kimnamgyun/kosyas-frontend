import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAgentComponent } from './config-agent.component';

describe('ConfigAgentComponent', () => {
  let component: ConfigAgentComponent;
  let fixture: ComponentFixture<ConfigAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
