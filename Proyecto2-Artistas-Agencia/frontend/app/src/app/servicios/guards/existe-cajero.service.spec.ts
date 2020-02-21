import { TestBed } from '@angular/core/testing';

import { ExisteProductorService } from './existe-productor.service';

describe('ExisteCajeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExisteProductorService = TestBed.get(ExisteProductorService);
    expect(service).toBeTruthy();
  });
});
