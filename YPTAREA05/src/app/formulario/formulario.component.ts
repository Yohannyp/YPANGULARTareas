import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
public nombreFormControl = new FormControl('')
public tituloFormControl = new FormControl('')
public bioFormControl = new FormControl('')
public personaFormControl = new FormGroup({
  'nombre': this.nombreFormControl,
  'titulo': this.tituloFormControl,
  'bio': this.bioFormControl
})

  public titulos: string[] 

  @Input() 
  public personas: Persona[] = [];

  constructor() {
    this.titulos = [
      'Profesor',
      'Programador',
      'Contador',
      'Enfermera'
    ]
   }

  ngOnInit(): void {
  }

  salvar() {
   this.personas.push({
     id:1,
     nombre: this.nombreFormControl.value,
     titulo: this.tituloFormControl.value,
     bio: this.bioFormControl.value
   })
    
  }


}
