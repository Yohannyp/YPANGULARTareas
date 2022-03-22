import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GastoComponent } from './gasto/gasto.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoService } from './Service/presupuesto.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'gasto', component: GastoComponent
  },

  {
    path: 'ingreso', component: IngresoComponent 
  },

  {
    path: '**', redirectTo: 'gasto'
  }

  
]

@NgModule({
  declarations: [
    GastoComponent,
    IngresoComponent
  ],
    
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule    
  ],

  providers:[
    PresupuestoService
  ]

})
export class PresupuestoModule { }
