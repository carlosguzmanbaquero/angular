import { Countries } from './../interfaces/jugadores';
import { Equipos } from './../interfaces/equipos';
import { EquipoService, EquipoTituloTablas } from './../service/equipo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tabla-equipos',
  templateUrl: './tabla-equipos.component.html',
  styleUrls: ['./tabla-equipos.component.scss']
})
export class TablaEquiposComponent implements OnInit {
  public tituloTablas = EquipoTituloTablas;
  public equipos$: Observable<Equipos[]>;
  constructor(private equipoService: EquipoService) { 
  }

  ngOnInit(): void {
    this.equipos$ = this.equipoService.getEquipos();
    this.equipoService.getEquipos().pipe(take(1)).subscribe(equipos => {
      if(equipos.length === 0){
        const equipo: Equipos = {
          nombre: 'Colombia',
          pais: Countries.Colombia,
          jugadores: null
        };
        this.equipoService.agregarEquipo(equipo);
      }
    });
  }

}
