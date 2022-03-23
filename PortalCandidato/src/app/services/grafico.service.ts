import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';


@Injectable({
  providedIn: 'root'
})
export class GraficoService {

  constructor(private genericservice: GenericService) 
  { this.genericservice= genericservice;}

  



}
