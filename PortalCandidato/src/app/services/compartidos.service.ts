import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CompartidosService {

  constructor(private genericService: GenericService) {
    this.genericService = genericService;
  }

  public controller = 'generic/';

  async getAllEstadoProceso() {
    let json;
    try {
      let salida = await this.genericService.GetAll(this.controller + 'GetEstadosProcesos/');
      json = typeof salida === 'string' ? JSON.parse(salida) : null;

    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }

  async validarInformePorFolio(folio: number) {
    let json;
    try {
      let salida = await this.genericService.Get(this.controller + 'getDataInformeByFolio/', folio);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }

  async historicoPorHash(hash: string) {
    let json;
    try {
      let salida = await this.genericService.Get(this.controller + 'getDataInformeByHash/', hash);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch (err) {
      json = JSON.parse(err).error;
    }
    return json;
  }

  async getAllClientes() {
    let json;
    try {
      let salida = await this.genericService.GetAll(this.controller + 'getAllCliente/');
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }

  async getAllPerfilesByCliente(idCliente: number){
    let json;
    try{
      let salida = await this.genericService.GetAll('getAllPerfilesByCliente/' + idCliente);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch(err:any){
      json = JSON.parse(err).error;
    }
    return json;
  }

  async getAllFaenasByCliente(idCliente: number){
    let json;
    try{
      let salida = await this.genericService.GetAll('getAllFaenasByCliente/' + idCliente);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch(err:any){
      json = JSON.parse(err).error;
    }
    return json;
  }

  async updateUser(candidato:any){
    let json;
    try {
      let salida = await this.genericService.Put('actualizarUsuario/'+ candidato.idCandidato, candidato);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }

  async getDatosExportacion(idPerfil: number,idFaena: number,idCliente: number) {
    let json;
    try {
      let salida = await this.genericService.GetAll('getDatosExportacion/'+ idPerfil + '/' + idFaena + '/' + idCliente);
      json = typeof salida === 'string' ? JSON.parse(salida) : null;
    } catch (err:any) {
      json = JSON.parse(err).error;
    }
    return json;
  }

  async getDatosCandidato(idCandidato: number){
    let json;
    try{
      let salida = await this.genericService.Get(this.controller + 'getDatosCandidato/', idCandidato);
      json = typeof salida === 'string' ? JSON.parse(salida) : null
      console.log(salida)
      console.log(json)
    }catch (err:any){
      json = JSON.parse(err).error;
    }
    return json;
  }












}
