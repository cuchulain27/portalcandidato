import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { UsuarioPortal } from '../models/UsuarioPortal';


@Injectable({
  providedIn: 'root'
})
export class UpdatecorreoService {
  constructor(private genericService: GenericService) {
    this.genericService = genericService;
  }

  public controller = 'UpdateMail/';

  async UpdateCandidato(idcandidato: UsuarioPortal) {
    let json;
    try {
      let salida = await this.genericService.Put(this.controller + 'UpdateEmail/', idcandidato);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }



}
