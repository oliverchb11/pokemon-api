import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { ModalJugador1Component } from './components/modal-jugador1/modal-jugador1.component';
import { ModalJugador2Component } from './components/modal-jugador2/modal-jugador2.component';
import { ModalDueloComponent } from './components/modal-duelo/modal-duelo.component';
import { ModalComputadoraComponent } from './components/modal-computadora/modal-computadora.component';



@NgModule({
  declarations: [
    ModalComponent,
    ModalJugador1Component,
    ModalJugador2Component,
    ModalDueloComponent,
    ModalComputadoraComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    ModalComponent,
    ModalJugador1Component,
    ModalJugador2Component,
    ModalDueloComponent,
    ModalComputadoraComponent
  ]
})
export class SharedModule { }
