import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prova1Component } from './prova1.component';

describe('Prova1Component', () => {
  let component: Prova1Component;
  let fixture: ComponentFixture<Prova1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prova1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prova1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
