import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HackathonPageRoutingModule } from './hackathon-routing.module';

import { HackathonPage } from './hackathon.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HackathonPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [HackathonPage]
})
export class HackathonPageModule {}
