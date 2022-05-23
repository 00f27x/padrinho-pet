import { TestBed } from '@angular/core/testing';

import { PetsProviderService } from './pets-provider.service';

describe('PetsProviderService', () => {
  let service: PetsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
