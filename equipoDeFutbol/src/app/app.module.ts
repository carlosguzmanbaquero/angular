import { EquipoService } from './service/equipo.service';
import { JugadorService } from './service/jugador.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { TablaEquiposComponent } from './tabla-equipos/tabla-equipos.component';
import { TablaJugadoresComponent } from './tabla-jugadores/tabla-jugadores.component';
import { DialogoJugadorComponent } from './dialogo-jugador/dialogo-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaEquiposComponent,
    TablaJugadoresComponent,
    DialogoJugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [JugadorService, EquipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
