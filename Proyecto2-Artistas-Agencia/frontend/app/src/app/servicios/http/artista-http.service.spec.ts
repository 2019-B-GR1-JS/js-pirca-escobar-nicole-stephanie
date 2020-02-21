import { TestBed } from '@angular/core/testing';

import { ArtistaHttpService } from './artista-http.service';

describe('AplicacionHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtistaHttpService = TestBed.get(ArtistaHttpService);
    expect(service).toBeTruthy();
  });
});
