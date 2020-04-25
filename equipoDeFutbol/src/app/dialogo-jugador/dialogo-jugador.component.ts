import { Component, OnInit } from '@angular/core';
import { Countries, NumeroPosicion } from '../interfaces/jugadores';
import { JugadorService } from '../service/jugador.service';
import { EquipoService } from '../service/equipo.service';
import { take } from 'rxjs/operators';
import { Equipos } from '../interfaces/equipos';

@Component({
  selector: 'app-dialogo-jugador',
  templateUrl: './dialogo-jugador.component.html',
  styleUrls: ['./dialogo-jugador.component.scss']
})
export class DialogoJugadorComponent implements OnInit {

  private equipo;
  private paises = Object.keys(Countries).map(key => ({
    label: key,
    key: Countries[key]
  }));
  /*
  private posiciones = Object.keys(NumeroPosicion).map(key => ({
    label: key,
    key: NumeroPosicion[key]
  }));*/
  private posiciones = Object.keys(NumeroPosicion).slice(Object.keys(NumeroPosicion).length/2);

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

  const equipoFormateado={
    ...this.equipo,
    jugadores:[...(this.equipo.jugadores?this.equipo.jugadores:[]), jugadorConKey]
  }
  this.equipoService.editarEquipo(equipoFormateado);
}

}
