import { Component, OnInit } from '@angular/core';
import { UsuarioPortal } from 'src/app/models/UsuarioPortal';
import { TableroBrecha } from '../../models/tableroGrafico';
import { TableroserviceService } from '../../services/tableroservice.service';

@Component({
  selector: 'app-tabla-grafifo',
  templateUrl: './tabla-grafifo.component.html',
  styleUrls: ['./tabla-grafifo.component.css']
})
export class TablaGrafifoComponent implements OnInit {

  public usuario: UsuarioPortal;

 public tableroBrecha?: TableroBrecha[] = [];

  constructor(private tableroConfig: TableroserviceService) {

    this.usuario = new UsuarioPortal();


    this.tableroConfig.getCantidadTableroBrecha(1048)
      .then(res => {
        console.log(res);
        this.tableroBrecha = res;
      }
      )
  }



  ngOnInit(): void {



  }







}
