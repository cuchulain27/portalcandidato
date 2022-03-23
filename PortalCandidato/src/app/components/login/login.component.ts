import { TransformacionesService } from './../../services/transformaciones.service';
import { AppToastServiceService } from './../../services/app-toast-service.service';
import { RespuestaService } from './../../services/respuesta.service';
import { LoginService } from './../../services/login.service';
import { LoginPortal } from 'src/app/models/LoginPortal';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioPortal } from '../../models/UsuarioPortal';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { style } from '@angular/animations';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginPortal: LoginPortal = {RutCandidato: '', Correo: '' };
  respuesta: { data: { message: string }; status: boolean; };
  usuarioTablero: boolean;
  contacto: FormGroup;
  hide = true;
  closeResult = '';



  @ViewChild('run')
  inputRunUsuario!: ElementRef;





  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private resService: RespuestaService,
    private router: Router, private appToast: AppToastServiceService, private transforma: TransformacionesService, private route: ActivatedRoute,  private modalService: NgbModal) {
    this.respuesta = { data: { message: '' }, status: false };
    this.usuarioTablero = false;

  }


  ngAfterViewInit() {

  }


  ngOnInit(): void {
    this.verificaSesion();
    this.verificaRuta();


    this.resService.disparador.subscribe(res => {
      if (res.status) {
        console.log(res)
        localStorage.setItem('data', JSON.stringify(res.data.usuario));
        if (this.usuarioTablero) {
          this.router.navigateByUrl('/Candidato');
        }else {
          this.router.navigateByUrl('/Candidato');
        }
      } else {
        this.respuesta.data.message = res.data.message;
        this.appToast.error(this.respuesta.data.message);
      }
    })

  }



    iniciarSesion() {
    debugger
    this.loginPortal.RutCandidato = this.loginPortal.RutCandidato.replace(/\./g, "").replace(/\-/g, '').toUpperCase();
    this.loginPortal.Correo = this.loginPortal.Correo.toUpperCase();
    this.loginService.preLogin(this.loginPortal)
      .then(salida => {

        this.respuesta = salida;
        this.respuesta.status ? this.appToast.info(this.respuesta.data.message) : this.appToast.error(this.respuesta.data.message);

      }
      )};


      verificaRuta() {


      }





  verificaSesion() {
    let token = localStorage.getItem('id_token')
    console.log("entro")
    if (token) {
      this.router.navigateByUrl('/Candidato')

    }


  }

  onChangeRun(run: string): string {
    const asRun = this.inputRunUsuario.nativeElement;
    this.loginPortal.RutCandidato = this.transforma.formatearRunOnChange(run);
    return this.loginPortal.RutCandidato
    //this.renderer2.setValue(asRun, this.transforma.formatearRunOnChange(run));
  }


  open(content) {
    this.modalService.open(content, { size: 'lg', centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
