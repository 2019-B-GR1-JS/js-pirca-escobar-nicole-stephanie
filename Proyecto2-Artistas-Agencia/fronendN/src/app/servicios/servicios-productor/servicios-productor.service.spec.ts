import { TestBed } from '@angular/core/testing';

import { ServiciosProductorService } from './servicios-productor.service';

describe('ServiciosProductorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiciosProductorService = TestBed.get(ServiciosProductorService);
    expect(service).toBeTruthy();
  });
});
