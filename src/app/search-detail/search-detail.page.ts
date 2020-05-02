import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { CoreServiceService } from "../services/core-service.service";

@Component({
  selector: "app-search-detail",
  templateUrl: "./search-detail.page.html",
  styleUrls: ["./search-detail.page.scss"],
})
export class SearchDetailPage implements OnInit {
  searchBy: string;
  searchName: string;
  pageTitle: string;
  showLoading = true;
  searchData: unknown[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private coreService: CoreServiceService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('searchBy') && !paramMap.has('searchName')) {
        return;
      }
      this.searchBy = paramMap.get('searchBy');
      this.searchName = paramMap.get('searchName');

      this.pageTitle = this.searchName;
      console.log('searchBy', this.searchBy);
      this.getSearchData(this.searchBy, this.searchName);
    });
  }

  getSearchData(searchBy, searchName) {
    if (searchBy === 'country') {    
      this.coreService.getDataByCountry(searchName).subscribe((res) => {       
        this.showLoading = false;
        this.searchData = res.data;        
        console.log('this.searchData', this.searchData);
      });
    } else if (searchBy === 'state') {     
      this.coreService.getIndiaData().subscribe((data) => {
        this.showLoading = false;
        this.searchData = data.state_wise[searchName];   
        console.log('this.searchData', this.searchData);   
      });
    } else if (searchBy === 'district') {     
      this.coreService.getIndiaData().subscribe((data) => {
        this.showLoading = false;
        this.searchData = data.state_wise['Tamil Nadu'].district[searchName];    
        console.log('this.searchData', this.searchData);  
      });
    }

    
  }

  openSearchList(searchBy) {
    // const searchName = searchBy !== 'country' ? searchBy === 'state' ? 'India' : 'Tamil Nadu' : 'Global';
    const navigationExtras: NavigationExtras = {
      queryParams: {
        searchName: this.searchName,
        searchBy
      },
      // relativeTo: this.activatedRoute
    };
    this.router.navigate(['./tabs/tab1/', searchBy], navigationExtras);
  }
}
