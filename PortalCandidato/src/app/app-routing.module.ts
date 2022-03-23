import { Exportar2Component } from './components/exportar2/exportar2.component';
import { HistorialCandidatoComponent } from './components/historial-candidato/historial-candidato.component';
import { ServiciosAsociadosComponent } from './components/servicios-asociados/servicios-asociados.component';
import { ValidadorComponent } from './components/validador/validador.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LevantaBrechaComponent } from './components/levanta-brecha/levanta-brecha.component';
import { CandidatoComponent } from './components/candidato/candidato.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'validador', component: ValidadorComponent },
  // { path: '**', redirectTo: '/login' },
  {path:'levantabrecha', component:LevantaBrechaComponent},
  {path:'levantabrecha/:id', component:LevantaBrechaComponent},
  {path:'candidato/:hash', component:HistorialCandidatoComponent},
  {path:'Candidato', component: CandidatoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
