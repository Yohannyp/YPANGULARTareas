import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Types } from 'src/app/models/Types';
import { Type } from 'src/app/models/Type';
import { Transaccion } from 'src/app/models/transaccion';
import { AppService } from 'src/app/app.service';

@Injectable()
export class PresupuestoService {
public form: FormGroup;

public types : Type[] = [
    { 
      name: "Transporte", type: Types.GASTO
    },
     
    { 
      name: "Libros", type: Types.GASTO
    },

    { 
      name: "Comida", type: Types.GASTO
    },

    { 
      name: "Cobro Nomina", type: Types.INGRESO
    },

    { 
      name: "Venta Sistema de Gastos e Ingresos Angular", type: Types.INGRESO
    }
  
  ]
  
  constructor(private formBuilder:FormBuilder, private appSrv: AppService) { 
    
    this.form = this.formBuilder.group({
       amount: ['', [Validators.required]],
       date: ['', [Validators.required]],
       type:['',[Validators.required]]
    });

  }

  public salvarTransaccion(parmCategoria:string){
   

    const tran: Transaccion = {
      id: this.getId(),
      amount: this.form.get("amount")?.value,
      date: this.form.get("date")?.value,
      //type: this.form.get("type")?.value,
      cuenta: this.type?.value,
      categoria:parmCategoria
      
    };

    this.appSrv.addTransaccion(tran);

  }

  public getTypes(type: Types): Type[] {
 
    return this.types.filter( t=> t.type === type)
  
  }

  
   private getId(): string{
     return Math.random().toString().substr(2);
}

get amount() {
  return this.form.get("amount")
}

get date() {
  return this.form.get("date")
}

get type() {
  return this.form.get("type")
 
}



}



