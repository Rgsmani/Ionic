import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreServiceService implements OnInit {
  APIBaseUrl = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/';
  total = 'total';
  stats = 'stats';

  APIIndiaBaseUrl = 'https://corona-virus-world-and-india-data.p.rapidapi.com/';
  // worldData = 'api';
  indiaData = 'api_india';

  globalDataList: any;
  indiaDataList: any;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.getCountryWiseList().subscribe((res) => {
      const data = res.data.covid19Stats;
      this.globalDataList = [...new Set(data.map((x) => x.country))];
    });
    this.getIndiaData().subscribe((res) => {     
      this.indiaDataList = res;
    });   
  }

  getDataByCountry(country?: string): Observable<any> {
    const headers = {
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': '679dc7ca64msh113e2536b6d5704p1f7566jsn302c7431d338',
    };
    return this.httpClient.get(
      this.APIBaseUrl + this.total + '?country=' + country,
      { headers }
    );
  }

  getCountryWiseList(country?: string): Observable<any> {
    const headers = {
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': '679dc7ca64msh113e2536b6d5704p1f7566jsn302c7431d338',
    };
    return this.httpClient.get(
      this.APIBaseUrl + this.stats + '?country=' + country,
      { headers }
    );
  }

  getIndiaData(): Observable<any> {
    const headers = {
      'x-rapidapi-host': 'corona-virus-world-and-india-data.p.rapidapi.com',
      'x-rapidapi-key': '679dc7ca64msh113e2536b6d5704p1f7566jsn302c7431d338',
    };
    return this.httpClient.get(this.APIIndiaBaseUrl + this.indiaData, {
      headers,
    });
  }
}
