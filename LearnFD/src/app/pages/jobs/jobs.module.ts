import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JobsPageRoutingModule } from './jobs-routing.module';

import { JobsPage } from './jobs.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JobsPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [JobsPage]
})
export class JobsPageModule {}
