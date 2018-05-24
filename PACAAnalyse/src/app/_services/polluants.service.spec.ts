import { TestBed, inject } from '@angular/core/testing';

import { PolluantsService } from './polluants.service';

describe('PolluantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PolluantsService]
    });
  });

  it('should be created', inject([PolluantsService], (service: PolluantsService) => {
    expect(service).toBeTruthy();
  }));
});
