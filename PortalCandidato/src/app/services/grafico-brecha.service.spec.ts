import { TestBed } from '@angular/core/testing';

import { GraficoBrechaService } from './grafico-brecha.service';

describe('GraficoBrechaService', () => {
  let service: GraficoBrechaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficoBrechaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
