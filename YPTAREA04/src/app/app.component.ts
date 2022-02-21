import { Component } from '@angular/core';
import { Persona } from './models/Persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YohannyPeñaTarea04';
  subTitle = 'Listado de Personas';
  public personas: Persona[] = []

constructor() 
{
  this.personas = 
  [
    { "id": 1,
      "nombre": "jamesy Umah",
      "titulo": "Nurse",
      "bio":"Temporal"},
    { "id": 2,
      "nombre": "juan suero",
      "titulo": "Web Designer",
      "bio":"Temporal"},
    { "id": 3,
      "nombre": "miguel hernandez",
      "titulo": "Software Engineer",
      "bio":"Temporal"},
    { "id": 4,
      "nombre": "rafael rodriguez",
      "titulo": "General Dentist",
      "bio":"Temporal"},
    { "id": 5,
      "nombre": "jose bautista",
      "titulo": "General Doctor",
      "bio":"Temporal"}
  ]

}

}
