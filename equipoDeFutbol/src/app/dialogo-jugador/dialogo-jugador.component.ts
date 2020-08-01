import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Countries, NumeroPosicion, Jugadores } from '../interfaces/jugadores';
import { JugadorService } from '../service/jugador.service';
import { EquipoService } from '../service/equipo.service';
import { take } from 'rxjs/operators';
import { Equipos } from '../interfaces/equipos';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialogo-jugador',
  templateUrl: './dialogo-jugador.component.html',
  styleUrls: ['./dialogo-jugador.component.scss']
})
export class DialogoJugadorComponent implements OnInit {

  @Output() closeDialog: EventEmitter<boolean> = new EventEmitter();
  @Input() jugador: Jugadores;
  private equipo;
  public paises = Object.keys(Countries).map(key => ({
    label: key,
    key: Countries[key]
  }));
  
  public posiciones = Object.keys(NumeroPosicion).slice(Object.keys(NumeroPosicion).length/2).map(key => ({
    label: key,
    key: NumeroPosicion[key]
  }));

  constructor(private jugadorService: JugadorService, private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.equipoService.getEquipos().pipe(take(1)).subscribe(equipos => {
      if(equipos.length > 0){
        this.equipo=equipos[0];
     }
  });
  
}

private crearJugador(jugador){
  const key=this.jugadorService.agregarjugador(jugador).key;
  const jugadorConKey ={
    ...jugador, key
  }

  if(this.equipo.jugadores!== undefined){
    const equipoFormateado={
      ...this.equipo,
      jugadores:[...(this.equipo.jugadores ? this.equipo.jugadores : []), jugadorConKey]
    }
    this.equipoService.editarEquipo(equipoFormateado);
  }else{
    const equipoFormateado={
      ...this.equipo,
      jugadores:[...([]), jugadorConKey]
    }
    this.equipoService.editarEquipo(equipoFormateado);
  }
    
}

private editarJugador(jugador){
  const jugadorFormateado={...jugador, $key:this.jugador.$key};
  const jugadorFormateadoKey={...jugador, key:this.jugador.$key};
  delete jugadorFormateadoKey.$key;

  const modificarJugador = this.equipo.jugadores
      ? this.equipo.jugadores.map(jugador => {
          return jugador.key === this.jugador.$key ? jugadorFormateadoKey : jugador;
        })
      : this.equipo.jugadores;
    const equpoFormateado = {
      ...this.equipo,
      jugadores: [...(modificarJugador ? modificarJugador : [jugadorFormateadoKey])]
    };
    
    this.jugadorService.editarJugador(jugadorFormateado);
    this.equipoService.editarEquipo(equpoFormateado);
}

onSubmit(formularioJugadores: NgForm){
  const jugadorACrear= {...formularioJugadores.value};
  if(formularioJugadores.valid){
    alert('entra');
  }

  if(jugadorACrear.izquierdo=== undefined){
    jugadorACrear.izquierdo=false;
  }

  jugadorACrear.izquierdo = jugadorACrear.izquierdo === '' ? false : jugadorACrear.izquierdo;

  if(this.jugador){
    this.editarJugador(jugadorACrear);
  }else{
    this.crearJugador(jugadorACrear);
    formularioJugadores.reset();
  }
  
  window.location.replace('#');
}

onClose(){
  this.closeDialog.emit(true);
}

}
