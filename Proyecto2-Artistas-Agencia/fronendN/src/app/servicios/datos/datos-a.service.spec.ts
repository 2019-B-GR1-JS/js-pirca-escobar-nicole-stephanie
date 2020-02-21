import { TestBed } from '@angular/core/testing';

import { DatosAService } from './datos-a.service';

describe('DatosAService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatosAService = TestBed.get(DatosAService);
    expect(service).toBeTruthy();
  });
});
