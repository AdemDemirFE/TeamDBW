import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PodcastPageRoutingModule } from './podcast-routing.module';

import { PodcastPage } from './podcast.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PodcastPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [PodcastPage]
})
export class PodcastPageModule {}
