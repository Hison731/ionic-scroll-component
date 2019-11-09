import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListscrollComponent} from './listscroll/listscroll.component'; // import listscrollcomponent
import {IonicModule} from '@ionic/angular';

@NgModule({
    declarations: [ListscrollComponent],  // import listscrollcomponent
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [ListscrollComponent]   // import listscrollcomponent
})
export class ComponentsModule {
}
