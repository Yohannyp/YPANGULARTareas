import { Component, OnInit} from '@angular/core';
import { AppService } from 'src/app/app.service';
import { PresupuestoService } from 'src/app/presupuesto/Service/presupuesto.service';
import { Type } from 'src/app/models/Type';
import { Types } from 'src/app/models/Types';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})


export class ListadoComponent implements OnInit {

  public types: Type[] = [];
  public selectedcat:string = '';
 
  selectChangeHandler (event:any){
    this.selectedcat = event.target.value;
  }


  constructor(public appSrv: AppService) { }

  ngOnInit(): void {
    console.log(this.appSrv.getTransacciones())

  }

}
