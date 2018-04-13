import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRicetteComponent } from './home-ricette.component';

describe('HomeRicetteComponent', () => {
  let component: HomeRicetteComponent;
  let fixture: ComponentFixture<HomeRicetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRicetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRicetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
