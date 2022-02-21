import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {
public personas:Persona[]=[];
public nombre: string ='';
public titulo: string ='';
public bio: string ='';

  constructor() { }

  ngOnInit(): void {
  }


public agregar()
{
  let persona: Persona=
  {
    id:0,
    nombre: this.nombre,
    titulo: this.titulo,
    bio: this.bio
  };

  this.personas.push(persona)
  
  
}

}
