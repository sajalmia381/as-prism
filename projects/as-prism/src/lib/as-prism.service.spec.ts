import { TestBed } from '@angular/core/testing';

import { AsPrismService } from './as-prism.service';

describe('AsPrismService', () => {
  let service: AsPrismService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsPrismService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
