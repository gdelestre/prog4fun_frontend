import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreRechercheComponent } from './barre-recherche.component';

describe('BarreRechercheComponent', () => {
  let component: BarreRechercheComponent;
  let fixture: ComponentFixture<BarreRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarreRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarreRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
