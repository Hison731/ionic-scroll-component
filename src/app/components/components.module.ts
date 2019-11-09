import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ListscrollComponent} from './listscroll/listscroll.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [ListscrollComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ListscrollComponent]
})
export class ComponentsModule { }
