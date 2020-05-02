import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',  
    children: [
      {
        path: '',
        component: Tab2Page,
      },
      {
        path: ':countryName',
        loadChildren: () =>
          import('./country-detail/country-detail.module').then(
            (m) => m.CountryDetailPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
