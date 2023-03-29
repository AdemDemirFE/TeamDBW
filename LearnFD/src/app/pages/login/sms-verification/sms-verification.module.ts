import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmsVerificationPageRoutingModule } from './sms-verification-routing.module';

import { SmsVerificationPage } from './sms-verification.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmsVerificationPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [SmsVerificationPage]
})
export class SmsVerificationPageModule {}
