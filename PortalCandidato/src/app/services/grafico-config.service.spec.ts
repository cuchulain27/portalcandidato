import { TestBed } from '@angular/core/testing';

import { GraficoConfigService } from './grafico-config.service';

describe('GraficoConfigService', () => {
  let service: GraficoConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraficoConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
