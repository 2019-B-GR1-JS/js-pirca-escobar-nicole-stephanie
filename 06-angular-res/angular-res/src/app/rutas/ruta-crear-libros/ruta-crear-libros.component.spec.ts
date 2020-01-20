import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCrearLibrosComponent } from './ruta-crear-libros.component';

describe('RutaCrearLibrosComponent', () => {
  let component: RutaCrearLibrosComponent;
  let fixture: ComponentFixture<RutaCrearLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCrearLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCrearLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
