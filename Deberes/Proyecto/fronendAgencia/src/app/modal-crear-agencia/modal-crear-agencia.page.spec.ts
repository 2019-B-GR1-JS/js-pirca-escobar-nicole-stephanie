import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCrearAgenciaPage } from './modal-crear-agencia.page';

describe('ModalCrearAPPPage', () => {
  let component: ModalCrearAgenciaPage;
  let fixture: ComponentFixture<ModalCrearAgenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearAgenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCrearAgenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
