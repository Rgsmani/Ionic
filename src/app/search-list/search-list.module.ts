import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchListPageRoutingModule } from './search-list-routing.module';

import { SearchListPage } from './search-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchListPageRoutingModule
  ],
  declarations: [SearchListPage]
})
export class SearchListPageModule {}
