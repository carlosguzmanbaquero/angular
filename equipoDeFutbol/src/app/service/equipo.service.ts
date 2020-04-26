import { Equipos } from '../interfaces/equipos';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export  const EquipoTituloTablas=['Nombre', 'Pais','Jugadores'];
@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private equipoDb:AngularFireList<Equipos>;

  constructor(private db:AngularFireDatabase) { 
    this.equipoDb=this.db.list('/equipos', ref=>ref.orderByChild('nombre'));
  }

  getEquipos():Observable<Equipos[]>{
    return this.equipoDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c=>({ $key : c.payload.key, ...c.payload.val()}));
      })
    );
  }

  agregarEquipo(equipo:Equipos){
    return this.equipoDb.push(equipo);
  }

  borrarEquipo(id:string){
    this.db.list('/equipos').remove(id);
  }

  editarEquipo(equipo){
    //alert('jugadores '+JSON.parse(equipo));
    const $key=equipo.$key;
    this.borrarEquipo($key);
    delete equipo.$key;
    this.db.list('/equipos').update($key, equipo);
    //delete equipo.$key;
    //return this.equipoDb.push(equipo);
  }
}
