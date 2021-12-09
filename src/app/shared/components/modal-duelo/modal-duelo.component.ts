import { Component, OnInit } from '@angular/core';
import { BuscarPokemonService } from 'src/app/core/services/buscar-pokemon.service';
import { DataDuelo } from 'src/app/interfaces/data-duelo.interface';
import { ResponsePokemon, Type } from 'src/app/interfaces/response-pokemon.interface';

@Component({
  selector: 'app-modal-duelo',
  templateUrl: './modal-duelo.component.html',
  styleUrls: ['./modal-duelo.component.scss']
})
export class ModalDueloComponent implements OnInit {
  public jugador1: DataDuelo;
  public jugador1Nombre: string;
  public pokemonJ1: ResponsePokemon[];
  public tiposj1: Type[] = [];
  public jugador2: DataDuelo;
  public jugador2Nombre: string;
  public pokemonJ2: ResponsePokemon[];
  public tiposj2: Type[] = [];
  public tipo1: string;
  public tipo2: string;
  // tslint:disable-next-line:variable-name
  public double_damage_from: string;
  // tslint:disable-next-line:variable-name
  public double_damage_to: string;
  // tslint:disable-next-line:variable-name
  public half_damage_from: string;
  // tslint:disable-next-line:variable-name
  public half_damage_to: string;
  // tslint:disable-next-line:variable-name
  public double_damage_from2: string;
  // tslint:disable-next-line:variable-name
  public double_damage_to2: string;
  // tslint:disable-next-line:variable-name
  public half_damage_from2: string;
  // tslint:disable-next-line:variable-name
  public half_damage_to2: string;
  constructor(
    private pokemonService: BuscarPokemonService
  ) { }

  ngOnInit(): void {
    this.informacionJugador1();
    this.informacionJugador2();
  }

  public informacionJugador1(): void{
    this.jugador1 = JSON.parse(localStorage.getItem('jugador1'));
    this.jugador1Nombre = this.jugador1.jugador1;
    this.pokemonJ1 = this.jugador1.pokemon;
    this.pokemonJ1.map((val) => {
      this.tiposj1 = val.types;
    });
  }
  public informacionJugador2(): void{
    this.jugador2 = JSON.parse(localStorage.getItem('jugador2'));
    this.jugador2Nombre = this.jugador2.jugador2;
    this.pokemonJ2 = this.jugador2.pokemon;
    this.pokemonJ2.map((val) => {
      this.tiposj2 = val.types;
    });
  }


  public luchar(pokem1: ResponsePokemon[], pokem2: ResponsePokemon[]): void{
    pokem1.map((val) => {
      val.types.map((type) => {
        this.typesP1(type.type.name);
      });
    });
    pokem2.map((val) => {
      val.types.map((type) => {
        this.typesP2(type.type.name);
      });
    });
  }

  public typesP1(tipo1: string): void{
    this.tipo1 = tipo1;
    this.pokemonService.tipoPokemon(tipo1).subscribe((type) => {
      type.double_damage_from.map((double) => {
        if (double.name === tipo1){
          console.log('P1 -70 en contra double_damage_from a', tipo1);
          this.double_damage_from = `-70 PTS double_damage_from ${tipo1}`;
        }
      });
      type.double_damage_to.map((double) => {
        if (double.name === this.tipo2){
          console.log('IMPORTANT', double.name, this.tipo2 );
          console.log(' P1 +70 en double_damage_to  a', this.tipo2);
          this.double_damage_to = `+70 PTS double_damage_to ${this.tipo2}`;
        }
      });
      type.half_damage_from.map((double) => {
        if (double.name === tipo1){
          console.log('P1 -30 en contra a half_damage_from', tipo1);
          this.half_damage_from = `-30 PTS half_damage_from ${tipo1}`;
        }
      });
      type.half_damage_to.map((double) => {
        if (double.name === this.tipo2){
          console.log('P1 +30 en half_damage_to  a', this.tipo2);
          this.half_damage_to = `+30 PTS half_damage_to ${this.tipo2}`;
        }
      });
    });
  }
  public typesP2(tipo2: string): void{
    this.tipo2 = tipo2;
    this.pokemonService.tipoPokemon(tipo2).subscribe((type) => {
      type.double_damage_from.map((double) => {
        if (double.name === tipo2){
          console.log(' P2 -70 en contra double_damage_from a', tipo2);
          this.double_damage_from2 = `-70 PTS double_damage_from ${tipo2}`;
        }
      });
      type.double_damage_to.map((double) => {
        if (double.name === this.tipo1){
          console.log('P2 +70 en double_damage_to  a', this.tipo1);
          this.double_damage_to2 = `+70 PTS double_damage_to ${this.tipo1}`;
        }
      });
      type.half_damage_from.map((double) => {
        if (double.name === tipo2){
          console.log('P2 -30 en contra half_damage_from a', tipo2);
          this.half_damage_from2 = `-30 PTS half_damage_from ${tipo2}`;
        }
      });
      type.half_damage_to.map((double) => {
        if (double.name === this.tipo1){
          console.log('P2 +30 en half_damage_to  a', this.tipo1);
          this.half_damage_to2 = `+30 PTS half_damage_to ${this.tipo1}`;
        }
      });
    });
  }




}
