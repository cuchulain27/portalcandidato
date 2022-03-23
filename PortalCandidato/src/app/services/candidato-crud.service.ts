import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { UsuarioPortal } from '../models/UsuarioPortal';


@Injectable({
  providedIn: 'root'
})
export class CandidatoCrudService {

  constructor(private genericService: GenericService) {
    this.genericService = genericService;
  }

  public controller = 'Update/';



  async UpdateCandidato(idCandidato: UsuarioPortal) {
    let json;
    try {
      let salida = await this.genericService.Put(this.controller + 'loginCorreo/', idCandidato);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }


}
