import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetaddressComponent } from './netaddress.component';

describe('NetaddressComponent', () => {
  let component: NetaddressComponent;
  let fixture: ComponentFixture<NetaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
