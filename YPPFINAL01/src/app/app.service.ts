import { Injectable } from '@angular/core';
import { Transaccion } from './models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class AppService {
private transacciones:Transaccion[] = []
  
constructor() { }

public addTransaccion(tran:Transaccion){
  
  this.transacciones.push(tran);
  this.setLocal(this.transacciones);

}

public getTransacciones(){

  return this.getLocal();

}

private setLocal(transacciones: Transaccion[]){
  localStorage.setItem('transacciones', JSON.stringify(transacciones))

}

private getLocal():Transaccion[]{
  const trans = localStorage.getItem("transacciones")
  
  if (trans) {
    return JSON.parse(trans) as Transaccion[];

  } else {
    this.setLocal([])
    return [];

  }


}

}
