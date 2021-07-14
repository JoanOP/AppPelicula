import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstrenosPageRoutingModule } from './estrenos-routing.module';

import { EstrenosPage } from './estrenos.page';

import { MenuComponent } from './../menu/menu.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstrenosPageRoutingModule
  ],
  declarations: [EstrenosPage,MenuComponent]
})
export class EstrenosPageModule {}
