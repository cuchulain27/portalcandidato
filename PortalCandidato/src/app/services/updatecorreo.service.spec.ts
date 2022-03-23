import { TestBed } from '@angular/core/testing';

import { UpdatecorreoService } from './updatecorreo.service';

describe('UpdatecorreoService', () => {
  let service: UpdatecorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatecorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
