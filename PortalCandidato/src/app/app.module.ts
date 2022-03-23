import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutorizaComponent } from './components/autoriza/autoriza.component';

import { AgGridModule } from 'ag-grid-angular';
import { JwtInterceptorInterceptor } from './services/jwt-interceptor.interceptor';
import { NavComponent } from './components/SharedComponents/nav/nav.component';
import { FooterComponent } from './components/SharedComponents/footer/footer.component';
import { BtnCellGridComponent } from './components/btn-cell-grid/btn-cell-grid.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppToastComponent } from './components/SharedComponents/app-toast/app-toast.component';
import { ValidadorComponent } from './components/validador/validador.component';
import { RunPipe } from './pipe/run.pipe';
import { ServiciosAsociadosComponent } from './components/servicios-asociados/servicios-asociados.component';
import { BtnCellGridBrechaComponent } from './components/btn-cell-grid-brecha/btn-cell-grid-brecha.component';
import { LevantaBrechaComponent } from './components/levanta-brecha/levanta-brecha.component';
import { HistorialCandidatoComponent } from './components/historial-candidato/historial-candidato.component';
import { SpinnerComponent } from './components/SharedComponents/spinner/spinner.component';
import { Exportar2Component } from './components/exportar2/exportar2.component';
import { TablaGrafifoComponent } from './components/tabla-grafifo/tabla-grafifo.component';
import {ChartModule} from 'primeng/chart';
import { CandidatoComponent } from './components/candidato/candidato.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'
import { TableModule } from 'primeng/table';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { PassComponent } from './components/pass/pass.component';
import { RegistrarMailComponent } from './components/registrar-mail/registrar-mail.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AutorizaComponent,
    NavComponent,
    FooterComponent,
    BtnCellGridComponent,
    AppToastComponent,
    ValidadorComponent,
    RunPipe,
    ServiciosAsociadosComponent,
    BtnCellGridBrechaComponent,
    LevantaBrechaComponent,
    HistorialCandidatoComponent,
    SpinnerComponent,
    Exportar2Component,
    TablaGrafifoComponent,
    CandidatoComponent,
    RegistrarComponent,
    PassComponent,
    RegistrarMailComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AgGridModule.withComponents([BtnCellGridComponent]),
    ChartModule,
    BrowserAnimationsModule,
    TableModule,
    MatInputModule



  ],
  exports:[



  ],

  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
