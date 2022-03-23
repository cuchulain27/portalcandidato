import { Component, OnInit } from '@angular/core';
import { Clientes } from './../../models/Clientes';
import { CompartidosService } from 'src/app/services/compartidos.service';
import { ProcesoIn } from './../../models/ProcesoIn';
import { Perfiles } from './../../models/perfiles';
import { Faenas } from './../../models/faenas';
import { ResultadoExportar } from './../../models/ResultadosExportar';
import { UsuarioPortal } from './../../models/UsuarioPortal';
import { Router } from '@angular/router';
import* as XLSX from 'xlsx'
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-exportar2',
  templateUrl: './exportar2.component.html',
  styleUrls: ['./exportar2.component.css']
})
export class Exportar2Component implements OnInit {
   public fileName='ExcelLSheet.xlsx'
   public jsonresult: string;


  public listClientes: Clientes[];
  //public procesoModel: ProcesoIn;
  public perfilModel: Perfiles;
  public listPerfiles: Perfiles[];
  public faenaModel: Faenas;
  public listFaenas: Faenas[];
  public inputTest: string;
  public resultadoExportar: ResultadoExportar[];
  public usuario: UsuarioPortal;

  constructor(private compartidosService: CompartidosService,private router: Router) {
    //this.procesoModel = new ProcesoIn();
    this.perfilModel = new Perfiles();
    this.faenaModel = new Faenas();
    this.listClientes = [];
    this.listPerfiles = [];
    this.listFaenas = [];
    this.inputTest = "";
    this.resultadoExportar = [];
    this.usuario = new UsuarioPortal();

   }


  ngOnInit(): void {
    this.verificaSesion();
    //this.cargarClientes();
    this.cargarPerfiles();
    this.cargarFaenas();

  }
  verificaSesion() {
    let token = localStorage.getItem('id_token');
    if (!token) {
      this.router.navigateByUrl('/login');
    }
    let salida = localStorage.getItem('data');
    this.usuario = typeof salida === 'string' ? JSON.parse(salida) : null;
  }
  // cargarClientes() {
  //   this.compartidosService.getAllClientes().then(data => this.listClientes = data);

  // }
  cargarPerfiles(){
    this.compartidosService.getAllPerfilesByCliente(this.usuario.id).then(data => this.listPerfiles = data);
  }
  cargarFaenas(){
    this.compartidosService.getAllFaenasByCliente(this.usuario.id).then(data => this.listFaenas = data);
  }
  onBtnBuscar() {
    if(this.usuario.id <= 0){
      Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text: 'Usuario sin cliente disponible'
      })
      return;
    }
    this.compartidosService.getDatosExportacion(this.perfilModel.id,this.faenaModel.id,this.usuario.id)
    .then(res => {
      this.resultadoExportar = res.data;
      const count = this.resultadoExportar.filter(item => item.perfil).length;
      if(count <= 0){
        Swal.fire({
          icon: 'error',
          title: 'Ooops...',
          text: 'No hay datos disponibles'
        })
      }else{
        Swal.fire({
          title: '¿Desea exportar los datos??',
          icon: 'success',
          showDenyButton: true,
          confirmButtonText: 'Sí',
          denyButtonText: `No`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            let element = document.getElementById('excel-table');
            const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

            // generate workbook and add the worksheet
            const wb: XLSX.WorkBook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
            // save to file
            XLSX.writeFile(wb, this.fileName);
          }
        })
      }
    });



  }
  onBtnShow(){
      // pass here the table id
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     // generate workbook and add the worksheet
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
     // save to file
     XLSX.writeFile(wb, this.fileName);
  }


}
