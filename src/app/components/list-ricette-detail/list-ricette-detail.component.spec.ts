import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRicetteDetailComponent } from './list-ricette-detail.component';

describe('ListRicetteDetailComponent', () => {
  let component: ListRicetteDetailComponent;
  let fixture: ComponentFixture<ListRicetteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRicetteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRicetteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
