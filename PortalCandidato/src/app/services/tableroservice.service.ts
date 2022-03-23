import { GenericService } from './generic.service';
import { Injectable } from '@angular/core';
import { TableroBrecha } from '../models/tableroGrafico';

@Injectable({
  providedIn: 'root'
})
export class TableroserviceService {

  constructor(private GenericService: GenericService) { }

  async getCantidadTableroBrecha(idperfil: number){
    let json;
    try {
      let salida = await this.GenericService.Get('getCantidadTableroBrecha?idcliente=', idperfil);
      json = await JSON.parse(salida + '')

    } catch (err: any) {
      json = JSON.parse(err).error;
    }

    return json;
  }

  mapper(data) : TableroBrecha[]{
    let tablero: TableroBrecha[] = [];
    data.map((x:TableroBrecha) => tablero.push(x));
    return tablero;
  }


}
