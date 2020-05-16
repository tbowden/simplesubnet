import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NettableComponent } from './nettable.component';

describe('NettableComponent', () => {
  let component: NettableComponent;
  let fixture: ComponentFixture<NettableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NettableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NettableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
