import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCrearAgenciaPage } from './modal-crear-agencia.page';

describe('ModalCrearAgenciaPage', () => {
  let component: ModalCrearAgenciaPage;
  let fixture: ComponentFixture<ModalCrearAgenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearAgenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCrearAgenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
