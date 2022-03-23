import { Component, Input, OnInit } from '@angular/core';
import { RespuestaService } from 'src/app/services/respuesta.service';

@Component({
  selector: 'app-registrar-mail',
  templateUrl: './registrar-mail.component.html',
  styleUrls: ['./registrar-mail.component.css']
})
export class RegistrarMailComponent implements OnInit {
  @Input() LoginEMail: any;
  @Input() respuesta: any;

  constructor(private resService: RespuestaService,) { }

  ngOnInit(): void {
  }

  autorizarLogueo() {

  }

}
