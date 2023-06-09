import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForCompaniesPageRoutingModule } from './for-companies-routing.module';

import { ForCompaniesPage } from './for-companies.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForCompaniesPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [ForCompaniesPage]
})
export class ForCompaniesPageModule {}
