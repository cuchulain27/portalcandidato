import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { LoginEmail } from '../models/LoginEmail';

@Injectable({
  providedIn: 'root'
})
export class UpdatEmailService {

  constructor(private genericService: GenericService) {
    this.genericService = genericService;
  }

  public controller = 'CandidatoPortal/';

  async login(login: LoginEmail) {
    let json;

    try {
      let salida = await this.genericService.Post(this.controller + 'loginCorreo/', login);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
      localStorage.setItem('id_token', json.data.token);
    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }

  logout() {
    localStorage.clear();
  }

}
