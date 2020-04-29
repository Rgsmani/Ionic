import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoreServiceService {

  APIBaseUrl = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/'; 
  total = 'total';
  stats = 'stats';

  constructor(private httpClient: HttpClient) { }

  getDataByCountry(country?: string): Observable<any> {
    const headers = {
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': '679dc7ca64msh113e2536b6d5704p1f7566jsn302c7431d338'
    };
    return this.httpClient.get(
      this.APIBaseUrl + this.total + '?country=' + country,
      { headers }
    );
  }


  getCountryWiseList(country?: string): Observable<any> {
    const headers = {
      'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
      'x-rapidapi-key': '679dc7ca64msh113e2536b6d5704p1f7566jsn302c7431d338'
    };
    return this.httpClient.get(
      this.APIBaseUrl + this.stats + '?country=' + country,
      { headers }
    );
  }


}
