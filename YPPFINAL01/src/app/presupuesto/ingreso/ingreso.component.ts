import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PresupuestoService } from '../Service/presupuesto.service';
import { Type } from 'src/app/models/Type';
import { Types } from 'src/app/models/Types';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  public types: Type[] = [];
  public parmCategoria: string = '';
  
  constructor(private appService: AppService, public presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    this.types = this.presupuestoService.getTypes(Types.INGRESO)
    
  }

  salvar(parmCategoria:string){
    this.presupuestoService.salvarTransaccion(parmCategoria)

    
  }


}
