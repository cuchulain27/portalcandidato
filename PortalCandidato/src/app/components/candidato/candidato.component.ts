import { CandidatosService } from './../../services/candidatos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioPortal } from 'src/app/models/UsuarioPortal';
import { CompartidosService } from 'src/app/services/compartidos.service';
import { Candidato } from '../../models/Candidato';
import { Acreditacion } from 'src/app/models/Candidatoacreditado';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CandidatoCrudService } from '../../services/candidato-crud.service';
import Swal from 'sweetalert2';
import { CandidatoBrecha } from '../../models/CandidatoBrecha';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.scss']
})
export class CandidatoComponent implements OnInit {
  candidatos: Candidato;
  public usuario: UsuarioPortal;
  products: Acreditacion[];
  Brecha: CandidatoBrecha[];
  hide = true;
  closeResult = '';
  registrationForm: FormGroup;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;


  constructor(private fb: FormBuilder, private modalService: NgbModal, private compartidoservice: CandidatosService, private compartidosServices: CompartidosService, private router: Router) {
    this.usuario = new UsuarioPortal();
    this.products = [];
    this.Brecha = [];
    this.candidatos = this.candidatos
  }


  ngOnInit(): void {
    debugger
    this.verificaSesion();
    this.cargarCandidato();
    this.CargarAcreditaciones();
    this.brechaCandidato();
    this.initRegForm();
  }

  brechaCandidato() {
    this.compartidoservice.BrechaCandidato(this.usuario.id)
    .then(res => {
      this.Brecha = res.data;
    })
  }

  initRegForm() {
    this.registrationForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmpassword: ["", Validators.required]
    });
  }

  CargarAcreditaciones() {
    this.compartidoservice.getCandidatoAcreditado(this.usuario.id)
      .then(res => {
        this.products = res.data;
        console.log(res.data)
      })
  }

  cargarCandidato() {
    this.compartidoservice.getDatosCandidato(this.usuario.id)
     .then(res => {
      this.candidatos = res.data[0]
    })
  }

  updateUser(){

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Esta Seguro?',
      text: "Actualizara los campos modificados!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, Actualizar la Informacion!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
          this.compartidoservice.UpdateCandidato()
        swalWithBootstrapButtons.fire(
          'Actualizado!',
          'Su informacion a sido Actualizada.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'error'
        )
      }
    })
  }


  verificaSesion() {
    let token = localStorage.getItem('id_token');
    if (!token) {
      this.router.navigateByUrl('/login');
    }

    let salida = localStorage.getItem('data');
    console.log(JSON.parse(salida))
    this.usuario = typeof salida === 'string' ? JSON.parse(salida) : null;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open2(content) {
    this.modalService.open(content, {size: 'lg', ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  open3(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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


  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

}
