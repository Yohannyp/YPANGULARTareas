import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetaswitch',
  templateUrl: './tarjetaswitch.component.html',
  styleUrls: ['./tarjetaswitch.component.css']
})
export class TarjetaswitchComponent implements OnInit {

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
