import { Component, OnInit } from '@angular/core';
import { Jugadores,NumeroPosicion,Countries } from '../interfaces/jugadores';
import { JugadorService, JugadorTituloTablas } from '../service/jugador.service';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-tabla-jugadores',
  templateUrl: './tabla-jugadores.component.html',
  styleUrls: ['./tabla-jugadores.component.scss']
})
export class TablaJugadoresComponent implements OnInit {

  public tituloTablas = JugadorTituloTablas;
  public jugadores$: Observable<Jugadores[]>;
  public seleccionJugador: Jugadores;
  public mostrarModal: boolean;

  constructor(private jugadorService: JugadorService) { 
  }

  ngOnInit(): void {
    
    this.jugadores$ = this.jugadorService.getJugadores();
    /*
    this.jugadorService.getJugadores().pipe(take(1)).subscribe(jugadores => {
      if(jugadores.length === 0){
        const jugador: Jugadores = {
          nombre:'Carlos',
          apellido:'Guzman',
          posicion: NumeroPosicion.arquero,
          peso:75,
          altura:1.65,
          nacionalidad:Countries.Colombia,
          izquierdo:false
        };
        this.jugadorService.agregarjugador(jugador);
      }
    });
    */
  }

  crearJugador(){
    this.mostrarModal=true;
    this.seleccionJugador=null;
    setTimeout(()=>{
      window.location.replace('#open');
    });
  }

}
