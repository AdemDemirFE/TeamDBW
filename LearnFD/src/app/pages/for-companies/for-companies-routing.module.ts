import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForCompaniesPage } from './for-companies.page';

const routes: Routes = [
  {
    path: '',
    component: ForCompaniesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForCompaniesPageRoutingModule {}
