import { TestBed } from '@angular/core/testing';

import { NewRegisterService } from './new-register.service';

describe('NewRegisterService', () => {
  let service: NewRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
