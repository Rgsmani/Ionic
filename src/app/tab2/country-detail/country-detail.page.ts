import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CoreServiceService } from 'src/app/services/core-service.service';

@Component({
  selector: "app-country-detail",
  templateUrl: "./country-detail.page.html",
  styleUrls: ["./country-detail.page.scss"],
})
export class CountryDetailPage implements OnInit {
  countryDetail: any;
  constructor(private activatedRoute: ActivatedRoute, private coreService: CoreServiceService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('countryName')) {
        return;
      }
      const countryName = paramMap.get('countryName');
      this.getDataByCountry(countryName);
     
    });
  }

  getDataByCountry(countryName) {
    this.coreService.getDataByCountry(countryName).subscribe((res) => {
     this.countryDetail = res.data;
     console.log('this.countryDetail', this.countryDetail);
    });
  }
}
