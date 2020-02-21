import { TestBed } from '@angular/core/testing';

import { ServicioArtistaHttpService } from './servicio-artista-http.service';

describe('ServicioArtistaHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioArtistaHttpService = TestBed.get(ServicioArtistaHttpService);
    expect(service).toBeTruthy();
  });
});
