import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BootcampPage } from './bootcamp.page';

const routes: Routes = [
  {
    path: '',
    component: BootcampPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BootcampPageRoutingModule {}
