import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  estaLogeado = false;

  constructor(private readonly _httpClient: HttpClient){

  }

  login(correo:string, password:string){
    const url = environment.url + `/usuario?correo=${correo}&password=${password}`;
    return this._httpClient
      .get(
        url
      );
  }

}
