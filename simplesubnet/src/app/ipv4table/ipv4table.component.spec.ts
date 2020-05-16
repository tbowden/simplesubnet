import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ipv4tableComponent } from './ipv4table.component';

describe('Ipv4tableComponent', () => {
  let component: Ipv4tableComponent;
  let fixture: ComponentFixture<Ipv4tableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ipv4tableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ipv4tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
