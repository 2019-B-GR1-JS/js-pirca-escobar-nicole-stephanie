import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-ruta-login',
  templateUrl: './ruta-login.component.html',
  styleUrls: ['./ruta-login.component.scss']
})
export class RutaLoginComponent implements OnInit {

  correo = '';
  passsword = '';
  constructor(private readonly  _authService:AuthService) { }
 const respuestaLogin$ = this._authService.login(this.correo, this.passsword);
  respuestaLogin$
  ngOnInit() {
  }

}
