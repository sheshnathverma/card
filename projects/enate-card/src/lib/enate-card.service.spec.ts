import { TestBed } from '@angular/core/testing';

import { EnateCardService } from './enate-card.service';

describe('EnateCardService', () => {
  let service: EnateCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnateCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
