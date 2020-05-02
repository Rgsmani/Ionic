import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',   
    children: [
      {
        path: '',
        component: Tab1Page,
      },
      {
        path: ':searchBy',
        loadChildren: () =>
          import('../search-list/search-list.module').then(
            (m) => m.SearchListPageModule
          ),
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
