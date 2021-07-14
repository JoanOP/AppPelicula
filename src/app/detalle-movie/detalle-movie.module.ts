import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMoviePageRoutingModule } from './detalle-movie-routing.module';

import { DetalleMoviePage } from './detalle-movie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMoviePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [DetalleMoviePage]
})
export class DetalleMoviePageModule {}
