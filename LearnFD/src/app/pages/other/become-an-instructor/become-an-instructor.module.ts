import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BecomeAnInstructorPageRoutingModule } from './become-an-instructor-routing.module';

import { BecomeAnInstructorPage } from './become-an-instructor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BecomeAnInstructorPageRoutingModule
  ],
  declarations: [BecomeAnInstructorPage]
})
export class BecomeAnInstructorPageModule {}
