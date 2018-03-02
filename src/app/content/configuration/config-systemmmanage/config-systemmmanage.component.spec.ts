import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigSystemmmanageComponent } from './config-systemmmanage.component';

describe('ConfigSystemmmanageComponent', () => {
  let component: ConfigSystemmmanageComponent;
  let fixture: ComponentFixture<ConfigSystemmmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigSystemmmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigSystemmmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
