import { Jugadores, Countries } from './jugadores';
export interface Equipos{
    $key? : string;
    nombre : string;
    pais : Countries;
    jugadores : Jugadores[]; 
}