import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { GraficoBrecha } from '../models/grafico_brecha';

@Injectable({
  providedIn: 'root'
})
export class GraficoBrechaService {

  constructor(private GenericService: GenericService) {
    this.GenericService = GenericService;



  }

  async getCantidadOperadoresBrechas(idCliente: number){
    let json;
    try {
      let salida = await this.GenericService.Get('getCantidadOperadoresBrechasPerfil/'+ idCliente,'/');
      json = await JSON.parse(salida + '')
      console.log(json);

    } catch (err: any) {
      console.log(err);

      json = JSON.parse(err).error;
    }
    return this.mapper(json);
  }
  mapper(data): GraficoBrecha[] {
    console.log(data);
    let grafico: GraficoBrecha[] = [];
    data.map((x: GraficoBrecha) => grafico.push(x));
    return grafico;
  }
}
