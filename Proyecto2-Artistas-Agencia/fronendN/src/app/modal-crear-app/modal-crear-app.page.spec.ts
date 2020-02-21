import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCrearAppPage } from './modal-crear-app.page';

describe('ModalCrearAppPage', () => {
  let component: ModalCrearAppPage;
  let fixture: ComponentFixture<ModalCrearAppPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCrearAppPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCrearAppPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
