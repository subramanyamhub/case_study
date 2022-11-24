import { TestBed } from '@angular/core/testing';

import { ViewWasherService } from './view-washer.service';

describe('ViewWasherService', () => {
  let service: ViewWasherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewWasherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
