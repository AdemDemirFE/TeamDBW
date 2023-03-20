import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllEventsPageRoutingModule } from './all-events-routing.module';

import { AllEventsPage } from './all-events.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllEventsPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [AllEventsPage]
})
export class AllEventsPageModule {}
