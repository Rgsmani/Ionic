import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchListPage } from './search-list.page';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: '',
        component: SearchListPage
      },
      {
        path: ':searchName',
        loadChildren: () =>
          import('../search-detail/search-detail.module').then(
            (m) => m.SearchDetailPageModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchListPageRoutingModule {}
