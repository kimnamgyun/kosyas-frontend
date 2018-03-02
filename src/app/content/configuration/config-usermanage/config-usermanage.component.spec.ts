import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigUsermanageComponent } from './config-usermanage.component';

describe('ConfigUsermanageComponent', () => {
  let component: ConfigUsermanageComponent;
  let fixture: ComponentFixture<ConfigUsermanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigUsermanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigUsermanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
