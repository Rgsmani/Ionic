import { Component, OnInit } from '@angular/core';
import { CoreServiceService } from '../services/core-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  data: any;

  constructor(private coreService: CoreServiceService) {}

  ngOnInit() {
    this.coreService.getDataByCountry().subscribe((res) => {
      this.data = res.data;
      console.log('data', res);
    });

    // this.coreService.getCountryWiseList().subscribe((data) => {
    //   console.log('data', data);
    // });
  }

}
