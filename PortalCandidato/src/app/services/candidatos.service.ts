import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {

  constructor(private genericService: GenericService) {
    this.genericService = genericService;
  }

  public controller = 'Exportar/';

  async getDatosCandidato(idCandidato: number){
    let json;
    try{
      let salida = await this.genericService.Get(this.controller +'getDatosCandidato/', idCandidato);
      json = typeof salida === 'string' ? JSON.parse(salida) : null
      console.log(salida)
      console.log(json)
    }catch (err:any){
      json = JSON.parse(err).error;
    }
    return json;
  }

  async getCandidatoAcreditado(idCandidato: number){
    let json;
    try{
      let salida = await this.genericService.Get(this.controller +'getCandidatoAcreditado/', idCandidato);
      json = typeof salida === 'string' ? JSON.parse(salida) : null
      console.log(salida)
      console.log(json)
    }catch (err:any){
      json = JSON.parse(err).error;
    }
    return json;
  }

  async UpdateCandidato() {
    let json;
    try {
      let salida = await this.genericService.Put;
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }

  async BrechaCandidato(idcandidato: number){
    let json;
    try{
      let salida = await this.genericService.GetAll('getBrechaCandidato/' + idcandidato);
      json = typeof salida === 'string' ? JSON.parse(salida) : null
    }catch (err:any){
      json = JSON.parse(err).error;
    }
    return json;

  }



}
