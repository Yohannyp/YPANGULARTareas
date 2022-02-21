import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { TarjetaswitchComponent } from './tarjetaswitch/tarjetaswitch.component';
import { ItemPersonaComponent } from './item-persona/item-persona.component';
import { ListadoPersonasComponent } from './listado-personas/listado-personas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaComponent,
    TarjetaswitchComponent,
    ItemPersonaComponent,
    ListadoPersonasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
