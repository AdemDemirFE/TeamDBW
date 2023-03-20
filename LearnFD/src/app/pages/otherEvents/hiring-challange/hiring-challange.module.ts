import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HiringChallangePageRoutingModule } from './hiring-challange-routing.module';

import { HiringChallangePage } from './hiring-challange.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HiringChallangePageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [HiringChallangePage]
})
export class HiringChallangePageModule {}
