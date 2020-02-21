import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuAplicacionPage } from './menu-aplicacion.page';

describe('MenuAplicacionPage', () => {
  let component: MenuAplicacionPage;
  let fixture: ComponentFixture<MenuAplicacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAplicacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuAplicacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
