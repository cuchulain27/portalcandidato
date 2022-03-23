import { TestBed } from '@angular/core/testing';

import { CandidatoCrudService } from './candidato-crud.service';

describe('CandidatoCrudService', () => {
  let service: CandidatoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandidatoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
