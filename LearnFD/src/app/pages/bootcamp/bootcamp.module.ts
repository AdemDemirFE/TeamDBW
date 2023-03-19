import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BootcampPageRoutingModule } from './bootcamp-routing.module';

import { BootcampPage } from './bootcamp.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BootcampPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [BootcampPage]
})
export class BootcampPageModule {}
