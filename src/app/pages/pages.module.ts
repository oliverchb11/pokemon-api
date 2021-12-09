import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { MaterialModule } from '../material/material.module';
import { PlayComponent } from './play/play.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InicioComponent,
    PageErrorComponent,
    PlayComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PagesModule { }
