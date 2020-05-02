import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { CoreServiceService } from '../services/core-service.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.page.html',
  styleUrls: ['./search-list.page.scss'],
})
export class SearchListPage implements OnInit {
  searchList: any;
  showLoading = true;
  searchBy: string;
  pageTitle = '';
  searchName: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private coreService: CoreServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((paramMap) => {
      if (!paramMap.searchBy && !paramMap.searchName) {
        return;
      }
      this.searchBy = paramMap.searchBy;
      this.searchName = paramMap.searchName;
     
      console.log('searchBy', this.searchBy);
      this.getSearchList(this.searchBy);
    });
  }

  getSearchList(searchBy) {
    if (searchBy === 'country') {
      this.pageTitle = this.searchName;
      this.coreService.getCountryWiseList().subscribe((res) => {
        const data = res.data.covid19Stats;
        this.showLoading = false;
        this.searchList = [...new Set(data.map((x) => x.country))];

        console.log('searchList', this.searchList);
      });
    } else if (searchBy === 'state') {
      this.pageTitle = this.searchName;
      this.coreService.getIndiaData().subscribe((data) => {
        this.showLoading = false;
        this.searchList = Object.keys(data.state_wise);      
      });
    } else if (searchBy === 'district') {
      this.pageTitle = this.searchName;
      this.coreService.getIndiaData().subscribe((data) => {
        this.showLoading = false;
        this.searchList = Object.keys(data.state_wise[this.searchName].district);      
      });
    }
  }

  openSearchDetail(searchName) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        searchName,
        searchBy:  this.searchBy
      },
      relativeTo: this.activatedRoute,
    };
    this.router.navigate(['./', searchName], navigationExtras);
  }
}
