import { TestBed } from '@angular/core/testing';

import { LangagesService } from './langages.service';

describe('LangagesService', () => {
  let service: LangagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
