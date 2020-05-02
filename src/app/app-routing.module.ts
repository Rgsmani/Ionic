import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search-list',
    loadChildren: () => import('./search-list/search-list.module').then( m => m.SearchListPageModule),
   
  },
  {
    path: 'search-detail',
    loadChildren: () => import('./search-detail/search-detail.module').then( m => m.SearchDetailPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
