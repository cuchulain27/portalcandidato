import { TestBed } from '@angular/core/testing';

import { UpdatEmailService } from './updat-email.service';

describe('UpdatEmailService', () => {
  let service: UpdatEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
