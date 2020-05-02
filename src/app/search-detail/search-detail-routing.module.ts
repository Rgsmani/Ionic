import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchDetailPage } from './search-detail.page';

const routes: Routes = [
  {
    path: '',
    component: SearchDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDetailPageRoutingModule {}
