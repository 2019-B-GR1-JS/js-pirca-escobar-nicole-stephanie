import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaBuscarLibrosComponent } from './ruta-buscar-libros.component';

describe('RutaBuscarLibrosComponent', () => {
  let component: RutaBuscarLibrosComponent;
  let fixture: ComponentFixture<RutaBuscarLibrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaBuscarLibrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaBuscarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
