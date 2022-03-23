import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginEmail } from 'src/app/models/LoginEmail';
import { AppToastServiceService } from 'src/app/services/app-toast-service.service';
import { LoginService } from 'src/app/services/login.service';
import { RespuestaService } from 'src/app/services/respuesta.service';
import { TransformacionesService } from 'src/app/services/transformaciones.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {
    loginEmail: LoginEmail = {
    RutCandidato: '',
    Correo: ''
  };

  respuesta: { data: { message: string }; status: boolean; };


  @ViewChild('run')
  inputRunUsuario!: ElementRef;



  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private resService: RespuestaService,
    private router: Router, private appToast: AppToastServiceService, private transforma: TransformacionesService, private route: ActivatedRoute) {
    this.respuesta = { data: { message: '' }, status: false };


  }

  ngOnInit(): void {
  }

  BuscarRun(){

  }

  onChangeRun(run: string): string {
    const asRun = this.inputRunUsuario.nativeElement;
    this.loginEmail.RutCandidato = this.transforma.formatearRunOnChange(run);
    return this.loginEmail.RutCandidato

  }

  iniciarSesion(){



  }

}
