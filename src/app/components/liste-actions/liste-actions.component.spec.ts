import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActionsComponent } from './liste-actions.component';

describe('ListeActionsComponent', () => {
  let component: ListeActionsComponent;
  let fixture: ComponentFixture<ListeActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
