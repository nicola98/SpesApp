import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageSiteComponent } from './single-page-site.component';

describe('SinglePageSiteComponent', () => {
  let component: SinglePageSiteComponent;
  let fixture: ComponentFixture<SinglePageSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
