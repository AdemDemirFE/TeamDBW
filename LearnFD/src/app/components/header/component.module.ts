import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
    declarations: [HeaderComponent],
    imports: [IonicModule],
    exports: [HeaderComponent]
})
export class BootcampPageModule {}
