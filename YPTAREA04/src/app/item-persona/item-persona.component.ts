import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../models/Persona';

@Component({
  selector: 'app-item-persona',
  templateUrl: './item-persona.component.html',
  styleUrls: ['./item-persona.component.css']
})
export class ItemPersonaComponent implements OnInit {
@Input()
public persona: Persona=
{id: 0, 
 nombre: '', 
 titulo:'',
 bio:''
};

  constructor() { }

  ngOnInit(): void {
  }

}
