import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
 
  @Input()
  nombre: string ='';
  @Input()
  titulo: string = '';
  @Input()
  bio: string = '';
 
  constructor() { }

  ngOnInit(): void {
  }

}
