import { Jugadores } from './../interfaces/jugadores';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export  const JugadorTituloTablas=['Nombre', 'Apellido','Posicion','Peso','Altura','Nacionalidad','Izquierdo','Editar'];

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private jugadorDb:AngularFireList<Jugadores>;

  constructor(private db:AngularFireDatabase) { 
    this.jugadorDb=this.db.list('/jugadores', ref=>ref.orderByChild('nombre'));
  }

  getJugadores():Observable<Jugadores[]>{
    return this.jugadorDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c=>({$key:c.payload.key, ...c.payload.val()}));
      })
    );
  }

  agregarjugador(jugador:Jugadores){
    return this.jugadorDb.push(jugador);
  }

  borrarjugador(id:string){
    this.db.list('/jugadores').remove(id);
  }

  editarJugador(jugador){
    const $key=jugador.$key;
    this.borrarjugador($key);
    //this.db.list('/jugadores').update($key, jugador);
    delete jugador.$key;
    this.jugadorDb.push(jugador);
  }
}
