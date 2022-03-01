import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  [x: string]: any;

  @Input() 
  public personas: Persona[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  borrarPersona(persona:Persona) {
    alert('Seguro Desea Borrar Tarjeta de ' + persona.nombre)
        
    this.personas = this.personas.filter(item => item !== persona);
  
  }
    

}
