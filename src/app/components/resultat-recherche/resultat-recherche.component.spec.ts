import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatRechercheComponent } from './resultat-recherche.component';

describe('ResultatRechercheComponent', () => {
  let component: ResultatRechercheComponent;
  let fixture: ComponentFixture<ResultatRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
