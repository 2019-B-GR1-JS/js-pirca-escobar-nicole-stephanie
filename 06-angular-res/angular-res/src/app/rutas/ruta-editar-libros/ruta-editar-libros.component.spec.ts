import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaEditarLibrosComponent } from './ruta-editar-libros.component';

describe('RutaEditarLibrosComponent', () => {
  let component: RutaEditarLibrosComponent;
  let fixture: ComponentFixture<RutaEditarLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaEditarLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaEditarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
