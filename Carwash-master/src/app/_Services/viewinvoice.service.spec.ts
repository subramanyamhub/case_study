import { TestBed } from '@angular/core/testing';

import { ViewinvoiceService } from './viewinvoice.service';

describe('ViewinvoiceService', () => {
  let service: ViewinvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewinvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
