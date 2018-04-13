import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoListeComponent } from './elenco-liste.component';

describe('ElencoListeComponent', () => {
  let component: ElencoListeComponent;
  let fixture: ComponentFixture<ElencoListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElencoListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElencoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
