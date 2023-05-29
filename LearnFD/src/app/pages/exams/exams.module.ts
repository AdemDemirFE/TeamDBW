import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamsPageRoutingModule } from './exams-routing.module';

import { ExamsPage } from './exams.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    ExamsPageRoutingModule
  ],
  declarations: [ExamsPage]
})
export class ExamsPageModule {}
