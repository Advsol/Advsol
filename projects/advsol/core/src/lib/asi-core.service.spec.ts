import { TestBed } from '@angular/core/testing';

import { AsiCoreService } from './asi-core.service';

describe('AsiCoreService', () => {
  let service: AsiCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsiCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
