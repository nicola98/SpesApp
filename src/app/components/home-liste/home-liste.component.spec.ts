import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListeComponent } from './home-liste.component';

describe('HomeListeComponent', () => {
  let component: HomeListeComponent;
  let fixture: ComponentFixture<HomeListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
