import { TestBed } from '@angular/core/testing';

import { AgenciaHttpService } from './agencia-http.service';

describe('SistemaOperativoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgenciaHttpService = TestBed.get(AgenciaHttpService);
    expect(service).toBeTruthy();
  });
});
