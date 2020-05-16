import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ipv6tableComponent } from './ipv6table.component';

describe('Ipv6tableComponent', () => {
  let component: Ipv6tableComponent;
  let fixture: ComponentFixture<Ipv6tableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ipv6tableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ipv6tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
