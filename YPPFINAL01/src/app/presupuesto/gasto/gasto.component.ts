import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PresupuestoService } from '../Service/presupuesto.service';
import { Type } from 'src/app/models/Type';
import { Types } from 'src/app/models/Types';

@Component({
  selector: 'app-gasto',
  templateUrl: './gasto.component.html',
  styleUrls: ['./gasto.component.css']
})

export class GastoComponent implements OnInit {
  
  public types: Type[] = [];
  public parmCategoria: string = '';  
  public selectedCuenta: string = '';

  selectChangeHandlerGasto (event:any){
    this.selectedCuenta = event.target.value;
  }


  constructor(private appService: AppService, public presupuestoService: PresupuestoService) { }

  ngOnInit(): void {
    this.types = this.presupuestoService.getTypes(Types.GASTO)
    
  }

  salvar(parmCategoria:string){
    this.presupuestoService.salvarTransaccion(parmCategoria)
            
  }

  

}
