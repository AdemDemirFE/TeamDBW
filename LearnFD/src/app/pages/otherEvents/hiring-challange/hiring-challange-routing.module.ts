import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HiringChallangePage } from './hiring-challange.page';

const routes: Routes = [
  {
    path: '',
    component: HiringChallangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HiringChallangePageRoutingModule {}
