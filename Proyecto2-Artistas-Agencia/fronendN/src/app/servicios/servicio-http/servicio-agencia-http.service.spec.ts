import { TestBed } from '@angular/core/testing';

import { ServicioAgenciaHttpService } from './servicio-agencia-http.service';

describe('ServicioAgenciaHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioAgenciaHttpService = TestBed.get(ServicioAgenciaHttpService);
    expect(service).toBeTruthy();
  });
});
