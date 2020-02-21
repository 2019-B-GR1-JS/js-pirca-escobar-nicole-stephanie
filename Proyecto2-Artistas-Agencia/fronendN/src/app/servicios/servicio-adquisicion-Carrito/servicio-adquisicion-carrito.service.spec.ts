import { TestBed } from '@angular/core/testing';

import { ServicioAdquisicionCarritoService } from './servicio-adquisicion-carrito.service';

describe('ServicioAdquisicionCarritoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioAdquisicionCarritoService = TestBed.get(ServicioAdquisicionCarritoService);
    expect(service).toBeTruthy();
  });
});
