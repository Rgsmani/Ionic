import { Component, OnInit } from '@angular/core';
import { CoreServiceService } from '../services/core-service.service';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  globalData: any;
  indiaData: any;
  tamilNaduData: any;
  chennaiData: any;
  countryDataList: unknown[];
  showLoading = true;

  constructor(
    private coreService: CoreServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menu: MenuController
  ) {}

  ngOnInit() {
    this.coreService.getDataByCountry().subscribe((res) => {
      this.globalData = res.data;
      this.showLoading = false;
     
    });
   

    this.coreService.getCountryWiseList().subscribe((res) => {
      const data = res.data.covid19Stats;
      this.countryDataList = [...new Set(data.map((x) => x.country))];
      this.showLoading = false;
     
    });

    

    this.coreService.getIndiaData().subscribe((data) => {
      this.indiaData = data;
      this.tamilNaduData = data.state_wise['Tamil Nadu'];
      this.chennaiData = data.state_wise['Tamil Nadu'].district.Chennai;
    });
  }

  openSearchList(searchBy) {
    const searchName = searchBy !== 'country' ? searchBy === 'state' ? 'India' : 'Tamil Nadu' : 'Global';
    const navigationExtras: NavigationExtras = {
      queryParams: {
        searchName,
        searchBy
      },
      relativeTo: this.activatedRoute
    };
    this.router.navigate(['./', searchBy], navigationExtras);
  }

  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  shareApp() {
    window.open('https://rgsmani.github.io/covid19/', '_system', 'location=yes'); 
    return false;
  }
}
