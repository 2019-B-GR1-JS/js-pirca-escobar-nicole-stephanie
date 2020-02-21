import { TestBed } from '@angular/core/testing';

import { DatosProductorService } from './datos-productor.service';

describe('DatosCajeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosProductorService = TestBed.get(DatosProductorService);
    expect(service).toBeTruthy();
  });
});
